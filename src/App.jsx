import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import "./App.css"

function App() {
  return (
    <Container className="App">
      <Row className="">
        <Col className="col-12 col-md-6 ">
        <h1>React App</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default App
