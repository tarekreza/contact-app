import React, { useState } from 'react'

const AllContact = ({ item ,contactDelete }) => {
    const [toogle, setTooggle] = useState(false);
    return (
        <>
            {toogle ?<div><h2>Name : {item.name}</h2><h2>Email : {item.email}</h2><h2>Phone : {item.phone}</h2><button onClick={() =>contactDelete(item.id)}>Delete</button></div>:<div className='cursor' onClick={() => setTooggle(true)}><h2>Name : {item.name}</h2></div>}
            <br />
        </>
    )
}

export default AllContact