import React from 'react'
import Logo from "../Images/logo.jpg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const handleClick = (item) => {
    if(item === 'Home'){
      navigate('/')
    } else if (item === 'Services'){
      navigate('/services')
    }
  }


  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="nav-items">
        {["Home", "Services"].map((item, index) => (
          <p key={index} className="nav-item" onClick={handleClick(item)}>
              {item}
          </p>
        ))}
      </div>
    </nav>
  );
}

export default Navbar