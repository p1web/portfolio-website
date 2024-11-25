import React, {  Component } from 'react';
import { Container, Nav, Navbar,NavLink, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Routes , Route, Link  } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contactus from '../pages/Contactus';
import Test from '../pages/Test';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Users from '../pages/Users';
import NoPage from "../pages/NoPage";

export default class Header extends Component{
    
render(){


    return(
        <Router>
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>Awesomeapp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink as={Link} to={"/"} activeclassname="active" >Home</NavLink>
                        <NavLink as={Link} to={"/about"} className={({ isActive }) => (isActive ? 'active' : '')} >About</NavLink>
                        <NavLink as={Link} to={"/service"} className={({ isActive }) => (isActive ? 'active' : '')} >Service</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/contact"} >Contact</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/test"}>Test Page</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/users"}>Users</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={"/"}>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink as={Link} to={"/register"}>Sign Up</NavLink>
                        <NavLink as={Link} to={"/login"}>Sign In</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
            /* <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                <NavLink className="navbar-brand"  as={Link} to={"/"}> Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                ><span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className='nav-item'>
                        <NavLink as={Link} className="nav-link" to={"/"}> Home </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink  as={Link} className="nav-link" to={"/about"}>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink  as={Link} className="nav-link" to={"/service"}>Service</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav> */
                }

 
        </div>
        <div>
            <Routes>
                <Route index path="/" element={ <Home/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/service" element={ <Services/> } />
                <Route path="/contact" element={ <Contactus/> } />
                <Route path="/test" element={ <Test/> } />
                <Route path="/users" element={ <Users/> } />
                <Route path="/register" element={ <Register/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
        </Router>
    
      
    )
}


}