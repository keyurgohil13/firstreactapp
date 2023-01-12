import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';


function View() {

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const back = () =>{
    console.log("Clck Back");
    navigate(-1);
  }
  return (
    <>
      <div>View</div>
      <Container>
        <h1>
          {
            location.state.data
          }
        </h1>
        <p>
          {
            location.state.msg
          }
        </p>
          <Button variant='primary' onClick={() =>{back()}}>Back</Button>
      </Container>
    </>
  )
}

export default View;