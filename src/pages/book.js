import React, { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import * as emailjs from "emailjs-com"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapContainer from '../components/Map'

const Book = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    songs: "",
    musicians: "",
    producer: ""
  })

  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email, phone, songs, musicians, producer } = form

    let templateParams = {
      name: name,
      email: email,
      phone: phone,
      songs: songs, 
      musicians: musicians, 
      producer: producer
    }

    emailjs
      .send(
        "gmail",
        process.env.GATSBY_EMAIL_TEMPLATE,
        templateParams,
        process.env.GATSBY_EMAIL_KEY
      )
      .then(res => {
        setForm({
          name: "",
          email: "",
          phone: "",
          songs: "", 
          musicians: "", 
          producer: ""
        })
        setIsSubmit(true)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <Container className="mw-100 p-0 m-0">
          <Row className="justify-content-center header w-100 m-0" id="book">
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="header-text">Book</h1>
            </div>
          </Row>
            <Row className="justify-content-center my-5">
              <Col xs={10} md={6} className={`${isSubmit ? "d-none" : ""} text-center`} style={{ maxWidth: 600 }}>
                <div style={{ display: "inline-block" }}>
                  <h3 style={{ color: "#292b2c", fontWeight: 300, marginBottom: 20 }}>
                    Start making some great music today.
                  </h3>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Control
                        className="contact-form"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted d-none contact-error">
                        Please Enter a Name.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        className="contact-form"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                      <Form.Control
                        className="contact-form"
                        type="phone"
                        placeholder="Phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formSongs">
                      <Form.Control
                        className="contact-form"
                        type="text"
                        placeholder="How many songs?"
                        name="songs"
                        value={form.songs}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formMusicians">
                      <Form.Control
                        className="contact-form"
                        as="textarea"
                        rows="4"
                        type="text"
                        placeholder="Do you need musicians, and if so, what instruments?"
                        name="musicians"
                        value={form.musicians}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formProducer">
                      <Form.Control
                        className="contact-form"
                        type="text"
                        placeholder="Do you need a producer?"
                        name="producer"
                        value={form.producer}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col xs={10} md={6} className={`${isSubmit ? "" : "d-none"} text-center`}>
                <h3 style={{ color: "#292b2c", fontWeight: 300 }}>
                  Thanks! We'll be in touch.
                </h3>
                <Button variant="outline-dark" onClick={() => setIsSubmit(false)}>Go Back</Button>
              </Col>
              <Col className='d-none d-md-block' md={6}>
                <MapContainer />
              </Col>
              </Row>
              <div className="d-block d-md-none">
              <MapContainer />
              </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Book
