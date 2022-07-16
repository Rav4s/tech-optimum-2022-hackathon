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
    )
}

export default NavBar;