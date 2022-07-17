import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from './firebase';

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
    <>
      <div className='Navbar'>
        <Link to='/'>
          <Navbar.Brand to='/' className='brand'>Nexus</Navbar.Brand>
        </Link>
        <div className='logo'>
          <img className='logo-image' src='/img/NavLogo.png' alt='Nexus logo - world map' />
        </div>
        <div className='NavLinks'>
          <Link to='/customize' className='link'>Preferences</Link>
          <Link to='/country-info' className='link'>Search Country</Link>
          <Link to='/query' className='link'>Search Places</Link>
          <Link to='/about' className='link'>About</Link>
        </div>
        <div className='login-info'>
          <Link to='/account' className='white'>
            <span>{name} - Account</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar;