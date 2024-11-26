import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CanvasCard from './CanvasCard';
import { Alert } from 'react-bootstrap'

const Body = () => {
  return (
    <Container>
      <Row>
        <Col><CanvasCard /><br /><Alert>asdaeasdasd</Alert></Col>
        <Col><CanvasCard /><br /><Alert>asdaeasdasd</Alert></Col>
        <Col><CanvasCard /><br /><Alert>asdaeasdasd</Alert></Col>
      </Row>
      <Row>
        <Col>1 of 3<br /><Alert>asdaeasdasd</Alert></Col>
        <Col>2 of 3<br /><Alert>asdaeasdasd</Alert></Col>
        <Col>3 of 3<br /><Alert>asdaeasdasd</Alert></Col>
      </Row>
    </Container>
  )
}

export default Body