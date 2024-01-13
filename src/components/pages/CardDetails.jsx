// show the info about the product
import { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const CardDetails = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()
  const navigate = useNavigate()

  const getProduct = async () => {
    const response = await fetch(`https://localHost:3000/product/${id}`)
    const data = await response.json()

    console.log(data);
    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return(
    <>
    </>
  )
}

export default CardDetails