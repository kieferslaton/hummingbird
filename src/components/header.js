import { Navbar, Nav, Row, Col, Button } from "react-bootstrap"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useCartCount } from "../context/StoreContext"
import { FaShoppingCart } from 'react-icons/fa'

import logo from "../images/logo.png"
import logoBlack from '../images/logo-black.png'

const Header = ({ menuLinks }) => {
  const [toggled, setToggled] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const isHome = url === 'http://localhost:8000/' || url === 'http://localhost:8000'

  const handleMobileClick = () => {
    setToggled(!toggled)
  }

  const cartCount = useCartCount()

  return (
    <Navbar variant="dark" className={`${isHome ? '' : 'dark'} nav`}>
      <Navbar.Brand>
        <img src={isHome ? logo : logoBlack} style={{ height: 30 }} />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="desktop">
          {menuLinks.map(link => (
            <li key={link.name} style={{margin: '0.5em'}}>
              <Link style={{color: isHome ? 'white' : 'black' }} to={link.link}>{link.name}</Link>
            </li>
          ))}
          <li style={{margin: '0.5em', flex: 1, alignItems: 'center'}}>
             <Link style={{color: isHome ? 'white' : 'black'}} to="/cart"><FaShoppingCart size={20} style={{margin: '0.1em 0.25em'}}/>   {cartCount}</Link> 
          </li>
        </Nav>
        <button
          onClick={handleMobileClick}
          className={`hamburger hamburger--spring ${
            toggled ? "is-active" : ""
          } ${isHome ? '' : 'dark'}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <Nav className={`nav-overlay ${toggled ? '' : 'collapsed'}`}>
          <div className="mobile-cart">
            <Button variant="outline-light"><Link style={{color: 'white'}} to="/cart" className="d-flex justify-content-center align-items-center"> Cart <FaShoppingCart size={20} style={{margin: '0 0.5em'}}/>   {cartCount}</Link></Button>
          </div>
          <Row className="h-100 d-flex align-items-center justify-content-center m-0 p-0">
            <Col className="text-center m-0 p-0" xs={12}>
            {menuLinks.map(link => (
              <div key={link.name} className="mobile-link">
              <Link style={{color: 'white'}} to={link.link}>{link.name}</Link>
              </div>
          ))}
            </Col>
          </Row>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
