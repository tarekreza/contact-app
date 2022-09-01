import React, { useState } from 'react'
import { v4 } from "uuid";
import AddContact from "./AddContact";
import AllContact from "./AllContact";
const Index = () => {
    const [first, setFirst] = useState(false);
    const [Number, setNumber] = useState(0);

    const [Info, setInfo] = useState([])

    const goToAll = () =>setFirst(false)

    const value = (value) =>{
        const temp = [...Info,{
            id: v4(),
            name: value.name,
            phone: value.phone,
            email: value.email
        }];
        setInfo(temp);
    }
    const contactDelete = (id) => {
        const temp = [...Info].filter((tmp)=>{return id !== tmp.id});
        setInfo(temp);
    }
    var length = Info.length;

    return (
        <>
            <div className='heading'><h4>Contact({length})</h4></div>
            <div className="tab">
                {first ? <div className="tab1 active cursor" onClick={() => { setFirst(true) }}><h6>Add New</h6>
                </div> : <div className="tab1 cursor" onClick={() => { setFirst(true) }}><h6>Add New</h6>
                </div>}
                {!first ? <div className="tab2 active cursor" onClick={() => { setFirst(false)  }}><h6>All Contact</h6>
                </div> : <div className="tab2 cursor" onClick={() => { setFirst(false)  }}><h6>All Contact</h6>
                </div>}
            </div>
            {first && <AddContact value = {value} goto = {goToAll}/>}
            {!first && Info.map((Item) => <AllContact  contactDelete = {contactDelete} item = {Item}/>)}
            {!first && Info.length === 0 && <div className="warning"><h2>Please add a new contact</h2></div>}
        </>
    )
}

export default Index