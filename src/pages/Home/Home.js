import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home(props) {



  const navigate = useNavigate();

  const list = ["Home", "Shop", "Contact"];

  const click = () => {

    navigate("/view", {state: {data : list, msg : "Heloo "}});

  }

  const back = () => {
    navigate("/back")
  }

  const addEmployee = () =>{

    navigate('/addEmployee')
  }
  console.log(props.msg, "props");
  return (
    <>
      <div>Home</div>
      <Container>
        <Button variant="primary" onClick={() => { click() }}>  View </Button>
        <Button variant="primary" onClick={() => { back() }}>  Back </Button>
        <Button variant="primary" onClick={() => { addEmployee()}}>  Add Employee </Button>
      </Container>

    </>
  )
}

export default Home;