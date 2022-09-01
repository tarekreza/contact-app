import React, { useState } from 'react'

const AddContact = ({ goto , value}) => {
    const [Warning, setWarning] = useState(false)
    const [TempName, setTempName] = useState('')
    const [TempPhone, setTempPhone] = useState('')
    const [TempEmail, setTempEmail] = useState('')
    const clicked = () => {
        if (TempName !== '' && TempPhone !== '' && TempEmail !== '') {
            const temp = {
                name: TempName,
                phone: TempPhone,
                email: TempEmail
            };
            value(temp)
            setTempName('')
            setTempPhone('')
            setTempEmail('')
            setWarning(false)
            goto();
        }
        else {
            setWarning(true)
        }
    }
    return (
        <>
            {Warning ? <div className="warning"><h2>Please fill all field</h2></div> : ''}
            <div>
                <label htmlFor="Name">Name</label>
                <input value={TempName} onChange={e => setTempName(e.target.value)} type="text" />
            </div>
            <div>
                <label htmlFor="Phone">Phone</label>
                <input value={TempPhone} onChange={e => setTempPhone(e.target.value)} type="Phone" />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input value={TempEmail} onChange={e => setTempEmail(e.target.value)} type="Email" />
            </div>
            <div>
                <button onClick={clicked}>Add</button>
            </div>
        </>
    )
}

export default AddContact