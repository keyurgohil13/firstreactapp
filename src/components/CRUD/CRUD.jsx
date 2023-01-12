import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { InputGroup } from 'react-bootstrap';

const getData = () =>{

    const getdata = localStorage.getItem('storeLocal');

    if(getdata){
        return JSON.parse(getdata);
    }
    else{
        return [];
    }
}

function CRUD() {


    // state define for initial..
    const [initial, setInitial] = useState({
        name: '',
        email: ''
    })


    //define state for edit Initial...
    const [editInitial, setEditInitial] = useState(
        {
            name: '',
            email: ''
        }
    )

    // Define state for store form data...
    const [storeData, setStoreData] = useState(getData());

    //define state for check edit...
    const [isEdit, setIsEdit] = useState(false);

    //define state for id...
    const [editIndex, setEditIndex] = useState('');

    // create change input ... 
    const changeInput = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

        if(isEdit){
            setEditInitial({...editInitial, [fieldName] : value})
        }
        else{
            setInitial({ ...initial, [fieldName]: value })
        }
    }

    // Form Submit ...
    const submitForm = (e) => {
        e.preventDefault();
        setStoreData([...storeData, initial]);
        setInitial({
            name: '',
            email: ''
        })

    }

    // edit method..
    const handleEdit = (index, data) => {
        
        setEditInitial(data);
        console.log(data);
        setEditIndex(index)
        setIsEdit(true)
    }


    //save event... 
    const handleSave = (index) => {
        setIsEdit(false);
        const array = storeData;
        array[index] = editInitial;
        setStoreData([...array]);
        setEditInitial({
            name : '',
            email : ''
        })
    }

    // delete data...
    
    const handleDelete = (index) =>{
        console.log("handleDelete", index);

       const filterData =  storeData.filter((el, id) => {

            return id !== index;
        })

        setStoreData([...filterData])

        // console.log(filterData);
    }
    useEffect(() =>{

        localStorage.setItem('storeLocal', JSON.stringify(storeData));
    }, [storeData])

    return (
        <>

            <Container>
                <h1>
                    CRUD
                </h1>
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={initial.name} onChange={(e) => changeInput(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" name='email' value={initial.email} onChange={(e) => changeInput(e)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <h1>
                    List
                </h1>
                <Table striped bordered hover className='w-100'>
                    <thead>
                        <tr className="d-flex">
                            <th className='col-1'>#</th>
                            <th className='col-4'> Name</th>
                            <th className='col-4'>Email </th>
                            <th className='col-3'> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeData.map((data, index) => {

                                return (
                                    <tr key={index} id={index} className="d-flex">
                                    <td className='col-1'>{ index +1 }</td>
                                    <td className='col-4'>{
                                            isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                            <Form.Control
                                                value={editInitial.name}
                                                name='name'
                                              className='w-100'
                                              onChange={(e) => changeInput(e)}
                                            //   onBlur={() => saveData(index)}
                                            />
                                          </InputGroup> : data.name
                                        }
                                    </td>
                                    <td className='col-4'>{isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                            <Form.Control
                                              name='email'
                                              value={editInitial.email}
                                              className='w-100'
                                              onChange={(e) => changeInput(e)}
                                            //   onBlur={() => saveData(index)}
                                            />
                                          </InputGroup> : data.email}</td>
                                    <td className='col-3'>

                                        {
                                            isEdit && editIndex == index ? <Button variant="primary" onClick={() => {handleSave(index)}}>Save</Button> : <Button variant="primary" onClick={() => {handleEdit(index, data)}}>Edit</Button>
                                        } 
                                        <span style={{border: "1px solid black", marginLeft: "10px", marginRight: "10px"}}></span>
                                        <Button variant="danger" onClick={() => {
                                            handleDelete(index)
                                        }}>Delete</Button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </Table>

            </Container>
        </>
    )
}

export default CRUD