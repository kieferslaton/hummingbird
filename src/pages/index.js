import React, { createContext } from "react"
import { Row, Col } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="home">
    <div id="overlay"></div>
      <h1>Hummingbird Recording</h1>
      <h3>Professional Studio in Vicksburg, MS</h3>
      <Row className="justify-content-center">
        <a href="#" className='social-icons' target="_blank" ><FaInstagram /></a>
        <a href="https://www.facebook.com/hummingbirdrecording" target="_blank" className='social-icons' ><FaFacebookF /></a>
        <a href="#" className='social-icons' target="_blank" ><FaEnvelope /></a>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
