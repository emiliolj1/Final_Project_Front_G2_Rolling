import { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Row} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const CardDetails = () => {

  
  // const [BookinShow, setBShow] = useState(false)

  // const handleClose = () => {
  //   setBShow(false)
  // }

  // const handleShow = () => {
  //   setBShow(true)
  // }

  // const { id } = useParams()
  // const navigate = useNavigate()

  // const getCancha = async () => {
  //   const response = await fetch(`https://localHost:4000/canchas/${id}`)
  //   const data = await response.json()

  //   console.log(data);
  //   setCancha(data)
  // }
  // useEffect(() => {
  //   getCancha()
  // }, [])

  // const makeBookin = async () => {
  //   try {
  //     const response = await fetch(``, {
  //       method:'POST'
  //     })
  //     const responsedata = await response.json()
  //     console.log(responsedata);
  //   } catch (error) {
  //     console.log('error creando la reserva', error);
  //   }
  // }

  return(
    <>
    </>
  )
}

export default CardDetails