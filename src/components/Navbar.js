//import React, { useState } from 'react'
// import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><b>{props.title}</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/textform">Texts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Set goals</a></li>
                  <li><a className="dropdown-item" href="/">Add/update journals</a></li>
                  <li><a className="dropdown-item" href="/">Timers</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contacts</a>
              </li>
            </ul>
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'}`} type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changemode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


