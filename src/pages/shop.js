import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Image,
  Modal,
  Button,
  Form,
  Toast,
} from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegTimesCircle } from "react-icons/fa"
import { useAddItemToCart } from "../context/StoreContext"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { shop } from "../images/shop.jpg"

const Shop = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            title
            shopifyId
            description
            images {
              originalSrc
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants {
              shopifyId
              title
            }
          }
        }
      }
    }
  `)

  const items = data.allShopifyProduct.edges

  const [show, setShow] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [item, setItem] = useState({
    node: {
      title: "",
      images: [
        {
          originalSrc: "",
        },
      ],
      description: "",
      priceRange: {
        minVariantPrice: {
          amount: 0,
        },
      },
      variants: [],
    },
  })
  const [itemId, setItemId] = useState("")

  const addItemToCart = useAddItemToCart()

  const handleAddtoCart = () => {
    addItemToCart(itemId, 1)
    setShowToast(true)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <Container className="mw-100 p-0 m-0">
          <Row className="justify-content-center header w-100 m-0" id="shop">
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="header-text">Shop</h1>
            </div>
          </Row>
          <Row className="mt-3 justify-content-center">
            {items.map(item => (
              <Col
                xs={10}
                sm={5}
                md={3}
                key={item.node.title}
                className="text-center my-3 shop-item"
                onClick={() => {
                  setItemId(item.node.variants[0].shopifyId)
                  setItem(item)
                  setShow(true)
                }}
              >
                <Image fluid src={item.node.images[0].originalSrc} />
                <h5 className="mt-3" style={{ fontWeight: 200 }}>
                  {item.node.title}
                </h5>
                <h5>${item.node.priceRange.minVariantPrice.amount}0</h5>
              </Col>
            ))}
          </Row>
        </Container>
        <Modal show={show} size="lg">
          <Modal.Body style={{position: 'relative'}}>
            <Button
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                border: "none",
                background: "none",
                color: "black",
              }}
              onClick={() => {
                  setShow(false)
                  setShowToast(false)
              }}
            >
              <FaRegTimesCircle size={30} />
            </Button>
            <Row className="mt-5 justify-content-center">
              <Col xs={12} md={6}>
                <Image fluid src={item.node.images[0].originalSrc} />
              </Col>
              <Col className="mt-3 mt-md-0" xs={12} md={6}>
                <h3>{item.node.title}</h3>
                <p>{item.node.description}</p>
                {item.node.variants.length > 1 ? (
                  <Form.Group>
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={e => setItemId(e.target.value)}
                    >
                      {item.node.variants.map(variant => (
                        <option value={variant.shopifyId}>
                          {variant.title}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                ) : (
                  ""
                )}
                <Button variant="dark" onClick={() => handleAddtoCart()}>
                  Add To Cart
                </Button>
              </Col>
            </Row>
            <Toast show={showToast} onClose={() => setShowToast(false)} style={{position: 'absolute', bottom: 20, left: 20}}>
              <Toast.Header>
                <strong className="mr-auto">Success!</strong>
              </Toast.Header>
              <Toast.Body>
                Item Added to Cart.
              </Toast.Body>
            </Toast>
          </Modal.Body>
        </Modal>
      </div>
    </Layout>
  )
}

export default Shop
