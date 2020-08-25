import React, { useEffect } from "react"
import { Row, Container, Col, Image, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckout,
} from "../context/StoreContext"
import { FaTimes } from "react-icons/fa"

const Cart = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            title
            shopifyId
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

  const rawCartItems = useCartItems()
  const cartTotal = useCartTotals()
  const removeItem = useRemoveItemFromCart()
  const checkout = useCheckout()

  const cleanCartItem = cartItem => {
    let cleanedItem = {}
    items.forEach(item => {
      item.node.variants.forEach((variant, index) => {
        if (variant.shopifyId === cartItem.variant.id) {
          cleanedItem.id = cartItem.id
          cleanedItem.title = item.node.title
          cleanedItem.img = item.node.images[0].originalSrc
          cleanedItem.variant = item.node.variants[index].title
          cleanedItem.price = item.node.priceRange.minVariantPrice.amount
        }
      })
    })
    return cleanedItem
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <Container className="mw-100 p-0 m-0">
          <Row className="justify-content-center header w-100 m-0" id="cart">
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="header-text">Cart</h1>
            </div>
          </Row>
          {rawCartItems.map(item => {
            let cleanedItem = cleanCartItem(item)
            return (
              <Row className="my-2 my-md-0 justify-content-center d-flex align-items-center p-0">
                <Col xs={2} className="text-center p-0 p-md-3">
                  <Image
                    className="p-0 m-0"
                    style={{ maxHeight: 150 }}
                    fluid
                    src={cleanedItem.img}
                  />
                </Col>
                <Col xs={5} md={3} className="text-center p-0">
                  {cleanedItem.title} | {cleanedItem.variant}
                </Col>
                <Col xs={2} className="text-center p-0">
                  ${cleanedItem.price}0
                </Col>
                <Col
                  xs={2}
                  className="text-center p-0 d-flex justify-content-center"
                >
                  <Button
                    variant="outline-dark"
                    className="d-flex align-items-center px-2"
                    onClick={() => removeItem(cleanedItem.id)}
                  >
                    <span className="d-none d-sm-block m-1">Remove</span>
                    <FaTimes size={20} />
                  </Button>
                </Col>
              </Row>
            )
          })}
          <Row className="my-4 justify-content-center d-flex align-items-center">
            <Col xs={7} md={5} className="text-right">
              Total:
            </Col>
            <Col xs={2} className="text-center p-0">
              {cartTotal.total}
            </Col>
            <Col
              xs={2}
              className="text-center p-0 d-flex justify-content-center"
            >
              <Button
                onClick={() => checkout()}
                variant="dark"
                className="px-3 d-none d-sm-block"
              >
                Check Out
              </Button>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center pt-3 d-sm-none">
            <Col
              xs={6}
              className="text-center p-0 d-flex justify-content-center"
            >
              <Button
                onClick={() => checkout()}
                variant="dark"
                className="px-3"
              >
                Check Out
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Cart
