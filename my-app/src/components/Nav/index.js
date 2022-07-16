import {Link, NavLink, useNavigate} from 'react-router-dom';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../firebase';

function NavBar() {
    const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
    return (
        <div className='Navbar'>
            <Navbar.Brand to='/' className='brand'>Nexus</Navbar.Brand>
            <div className='logo'>
                <img src='NavLogo.png' alt='logo' />
            </div>
            <div className='NavLinks'>
                <Link to='../about' className='link'>About</Link>
            </div>
            <div className='login-info'>
                Signed in as <span>{name}</span>
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