import React, { useState } from "react"
import { Container, Row, Col, Image} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import kimble from '../images/kimble.jpg'

const About = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <Container className="mw-100 p-0 m-0">
          <Row className="justify-content-center header w-100 m-0" id="about">
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="header-text">About</h1>
            </div>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={10} md={8}>
              <p style={{fontWeight: 200, textAlign: 'center'}}>Built in 2016, Hummingbird Studio is the premier recording space in Vicksburg, MS. Hummingbird has been home to acts like Dorothy Moore, Misty Blue and Kern Pratt. It is also the recording space used by the Miss Mississippi Pageant and the Miss Mississippi Outstanding Teen Pageant.</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={10} md={6}>
              <Image fluid src={kimble} />
            </Col>
            <Col xs={10} md={6} className="my-4 my-md-0">
              <h3 className="header-sm">Kimble Slaton</h3>
              <p style={{fontWeight: 200, textAlign: 'center'}}>Kimble is the owner and proprietor of Hummingbird. Insert bio here</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default About
