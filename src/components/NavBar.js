import React from 'react';
import logo from "../logo.png";

export default function NavBar() {
    return (
        
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item active">
           <a className="nav-link" href="#">Models<span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
           <a className="nav-link" href="#">IoT<span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
           <a className="nav-link" href="#">Articles<span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
         </li>
        </ul>
       </div>
     </nav>
    )
}
