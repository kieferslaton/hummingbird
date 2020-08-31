import React, { useState } from "react"
import { Container, Row, Col, Image} from "react-bootstrap"
import { FaChevronLeft, FaChevronRight, Button } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

import kimble from '../images/kimble.jpg'
import main_room from '../images/main_room.jpg'
import drum_room from '../images/drum_room.jpg'
import mixing_room from '../images/mixing_room.jpg'

const About = () => {

  const rooms = [
    {
      ind: 0, 
      name: 'Mixing Room', 
      img: mixing_room, 
      equipment: [
        '72 Input Neve 8078', 
        '2x Telefunken V72', 
        'Chandler EMI TG12413', 
        'Teletronix LA-2A',
        'Wurlitzer 200A Electric Piano'
      ]
    }, 
    {
      ind: 1, 
      name: 'Recording Room', 
      img: main_room, 
      equipment: [
        'Chandler EMI TG2', 
        'Telefunken V76', 
        'Telefunken V72', 
        'API512C', 
        'John Hardy M1'
      ]
    }, 
    {
      ind: 2, 
      name: 'Drum Room', 
      img: drum_room, 
      equipment: [
        'Sonos Drum Kit',
        'Vintech X81', 
        '3X Shadow Hills Gamma'
      ]
    }
  ]

  const [currentRoom, setCurrentRoom] = useState(rooms[0])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <Container className="mw-100 p-0 mb-3">
          <Row className="justify-content-center header w-100 m-0" id="about">
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="header-text">About</h1>
            </div>
          </Row>
          <Row className="justify-content-center mt-5 py-3">
            <Col xs={10} md={8}>
              <p style={{fontWeight: 200, textAlign: 'center'}}>Built in 2016, Hummingbird Studio is the premier recording space in Vicksburg, MS. Hummingbird has been home to acts like Dorothy Moore, Misty Blue and Kern Pratt. It is also the recording space used by the Miss Mississippi Pageant and the Miss Mississippi Outstanding Teen Pageant.</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={10} md={5} lg={4}>
              <Image fluid src={kimble} />
            </Col>
            <Col xs={10} md={5} lg={4} className="my-3 my-md-0">
              <h3 className="header-sm">Kimble Slaton</h3>
              <p style={{fontWeight: 200, textAlign: 'center'}}>Kimble is the owner and proprietor of Hummingbird. He has been working in sound engineering for over 30 years, and is currently the front-of-house audio engineer for the Miss Mississippi Pageant and Miss Mississippi Outstanding Teen Pageant. He lives in Vicksburg with his wife.</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mt-md-5">
            <Col xs={6} className="text-center">
              <h1 className="header-sm">Rooms</h1>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={10} md={6}>
              <div className="room-carousel" style={{backgroundImage: 'url('+currentRoom.img+')'}}>
                <div className="kick kick-left" onClick={() => {
                  if(currentRoom.ind === 0){
                    setCurrentRoom(rooms[rooms.length - 1])
                  } else {
                    setCurrentRoom(rooms[currentRoom.ind - 1])
                  }
                }}><FaChevronLeft /></div>
                <div className="kick kick-right" onClick={() => {
                  if(currentRoom.ind === rooms.length - 1){
                    setCurrentRoom(rooms[0])
                  } else {
                    setCurrentRoom(rooms[currentRoom.ind + 1])
                  }
                }}><FaChevronRight /></div>
              </div>
            </Col>
            <Col xs={10} md={5} lg={3} className="mt-3 mt-md-0">
              <h4 className="header-sm">{currentRoom.name}</h4>
              <h6 className="header-sm mt-4">Equipment</h6>
              <ul style={{listStyleType: 'none', fontWeight: 200}}>
                {currentRoom.equipment.map(equip => (
                  <li>{equip}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default About
