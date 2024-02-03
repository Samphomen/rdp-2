import React from 'react'
import Logo from "../Images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="nav-items">
        {["Home", "Services", "About", "Contact"].map((item, index) => (
          <a href={`\${item}`} key={index} className="nav-item">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar