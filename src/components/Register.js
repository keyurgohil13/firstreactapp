import React, { useEffect } from "react";
import { useFormik } from 'formik';
import { useState } from "react";
import {RegisterSchema} from '../schemas/RegisterSchema';
import inValue from './intial';




function getData(){
    let datas = window.localStorage.getItem("myData");
    if(datas === null){
        return [];
    }
    else{
        return JSON.parse(datas);
    }
}

function Register() {
    const [submitData, setSubmitData] = useState(getData());
    const {values, handleBlur, handleChange, handleSubmit, errors, touched} =  useFormik({
        initialValues : inValue,
        validationSchema: RegisterSchema,
        onSubmit : (values, action) => {
            const newData = values;
            setSubmitData([...submitData, newData])
            action.resetForm('');
        }
    })

    const clearData =()=>{

        window.localStorage.clear();
    }

    useEffect(() => {
        window.localStorage.setItem("myData", JSON.stringify(submitData));
        window.localStorage.setItem("data", "Helloo");
    }, [submitData])
    return (
        <>
        <form onSubmit={handleSubmit}>

            <label>
                Name :
            </label>
            <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
            {
                touched.name && errors.name ?
               <span>
                {
                    errors.name
                }
               </span> : ''
            }
            <br/>
            <br/>

            <label>
                Email :
            </label>
            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            {
                touched.email && errors.email ?
               <span>
                {
                    errors.email
                }
               </span> : ''
            }
            <br/>
            <br/>

            <label>
                Password :
            </label>
            <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>

            {
                touched.password && errors.password ?
               <span>
                {
                    errors.password
                }
               </span> : ''
            }
            <br/>
            <br/>
            
            <label>
                Confirm Password :
            </label>
            <input type="password" name="c_password" value={values.c_password} onChange={handleChange} onBlur={handleBlur}/>
            {
                touched.c_password && errors.c_password ?
               <span>
                {
                    errors.c_password
                }
               </span> : ''
            }
            <br/>
            <br/>

            <button type="submit">Submit</button>

            <button type="button" onClick={()=>{clearData()}}>Clear</button>
        </form>

        <h1>
            List
        </h1>
        <ul className="container">
            {
                submitData.map((data, i)=>{
                    // console.log("data", data);
                   return( <li className="row" key={i}>
                        <span className="col-1">
                            {
                                i+1
                            }
                        </span>
                        <span className="col-3">
                            {
                                data.name
                            }
                        </span>
                        <span className="col-5">
                            {
                                data.email
                            }
                        </span>
                        <span className="col-3">
                            <input type="password" value={data.password} />
                        </span>
                    </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default Register;