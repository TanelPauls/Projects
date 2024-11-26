import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './CustomNavbar.css'
import { Container, Navbar, Image } from 'react-bootstrap';
import DuckLogo from '../../public/Duck.svg'

const CustomNavbar = () => {
  return (
    <>
     <Navbar className='custom-navbar'>
     <Container>
     <Navbar.Brand href="/">
        <Image
          src={DuckLogo}
          alt="Logo"
          width="50"
          height="50"
          rounded
        />
     </Navbar.Brand>


      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
     </Container>
     </Navbar>
    </>
  )
}

export default CustomNavbar