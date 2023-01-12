import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Features() {

  const navigate = useNavigate();
  const click = () => {

    navigate("/view", {state : {msg : "Good Morning"}});

  }

  const back = () => {
    navigate("/back")
  }
  return (
    <><div>Features</div><Container>
      <Button variant="primary" onClick={() => { click(); }}>  View </Button>
      <Button variant="primary" onClick={() => { back(); }}>  Back </Button>
    </Container></>
  )
}

export default Features;