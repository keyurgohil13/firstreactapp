import React, { useState } from 'react';

function ManageForm() {

    const [data, setData] = useState({
        name : '',
        email : ''
    });

    const [submitData, setSubmitData] = useState([]);

    const handleInput = (e) => {

        const formname = e.target.name;
        const value = e.target.value;

        setData({ ...data , [formname] : value});
    }

    const submitForm = (e) =>{
        e.preventDefault();
       const newData = data;
       
       setSubmitData([...submitData, newData])
       setData({
        name : '',
        email : ''
       })
    }
    return (
        <>
            <h1>
                Form
            </h1>
            <form onSubmit={submitForm}>
                <label>
                    Name : 
                </label>
                <input type="text" name="name" onChange={handleInput} value={data.name}/>

                <br/>

                <label>
                    Email :
                </label>
                <input type="text" name="email" onChange={handleInput} value={data.email}/>

                <br/>

                <input type="submit" />
            </form>


            {
                submitData.map((d, i) => {

                   return(
                    <div key={i} id={i}>
                        <span>
                            {
                                i + 1
                            }
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            {
                                d.name
                            }
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            {
                                d.email
                            }
                        </span>
                    </div>
                   ) 
                })
            }
        </>
    )
}

export default ManageForm;