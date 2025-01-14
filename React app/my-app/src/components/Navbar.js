
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/Textform">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/Textform">Home</Link>
          </li>
        </ul>
        <button type="button" onClick={props.toggleStyle} className="btn btn-outline-info me-2">{props.btnicon}</button>
      </div>
    </div>
  </nav>
  </>
  )
}

Navbar.propTypes={
   title: PropTypes.string.isRequired,
   Contact : PropTypes.string
}

Navbar.defaultProps={
 title : "Virtual cvv",

};