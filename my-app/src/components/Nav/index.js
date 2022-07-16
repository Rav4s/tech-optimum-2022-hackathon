import {Link, NavLink} from 'react-router-dom';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <div className='Navbar'>
            <Navbar.Brand href="#home" className='brand'>Nexus</Navbar.Brand>
            <div className='logo'>
                <img src='./NavLogo.png' alt='logo' />
            </div>
            <div className='NavLinks'>
                <Link to='../about'>About</Link>
            </div>
            <div className='login-info'>
                
            </div>
        </div>
        //bootstrap not working, going to write own navbar
        // <Container className='Navbar-container'>
        // <Navbar bg="light" className='Navbar'>
        // <Container>
        //     <Navbar.Brand href="#home" className='brand'>React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="me-auto">
        //         <Nav.Link href="#home">Home</Nav.Link>
        //         <Nav.Link href="#link">Link</Nav.Link>
        //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //         <NavDropdown.Item href="#action/3.2">
        //             Another action
        //         </NavDropdown.Item>
        //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //         <NavDropdown.Divider />
        //         <NavDropdown.Item href="#action/3.4">
        //             Separated link
        //         </NavDropdown.Item>
        //         </NavDropdown>
        //     </Nav>
        //     </Navbar.Collapse>
        // </Container>
        // </Navbar>
        // </Container>
    )
}

export default NavBar;