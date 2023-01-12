import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function EmployeeView() {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.data);

    const addEmployee = () => {

        navigate('/addEmployee')
    }
    return (
        <>
            <Container>

                <Row className='justify-content-between'>
                    <h1 className='col-5'>
                        Employee View
                    </h1>
                    <div className='col-2'>
                        <Button variant="primary" onClick={() => { addEmployee() }}>  Add Employee </Button>

                    </div>
                </Row>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Gender</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            location.state.data.map((d, index) => {
                                return (<tr>
                                    <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {
                                            d.name
                                        }
                                    </td>
                                    <td>
                                        {
                                            d.email
                                        }
                                    </td>
                                    <td>
                                        {
                                            d.mobile
                                        }
                                    </td>
                                    <td>
                                        {
                                            d.gender
                                        }
                                    </td>
                                    <td>
                                        {
                                            d.address
                                        }
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

export default EmployeeView