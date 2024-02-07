import './components/styles/styleLogin.css'
import { useForm } from 'react-hook-form';
import '../styles/Login.css'
import { Container, Row, Col, Form, Button,} from 'react-bootstrap'


const Change = () => {
    const { register, handleSubmit, formState:{errors} } = useForm()

    const onSubmit = async() => {
        const response = await fetch(`http://localhost:4000/users/${id}`,{
            method:'POST',
            headers:{'Content-type':'application/json'},
            credentials:'include',
        })
        const responseData =  await response.json()
        console.log(responseData);
    }
    
    return(
        <>
        <Form className='p-0' onSubmit={handleSubmit((data) => onSubmit(data))}>
        {/* set the handleSubmit for the control.*/}
            <h1 className='mt-5'>Ingresar</h1>
            <Form.Group className='m-2'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                 {...register('name', {required:'este campo es requerido'}, {maxLength: 20}, {minLength: 4})}
                />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
            </Form.Group>
        

            <Form.Group className='m-2'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                className='ms-0 me-5 pe-5' 
                type='text'
                placeholder='Enter a Password...'
                isInvalid={!!errors.password}
                // the method register allows you to register an input or select element and apply validations rules
                // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                {...register('email', {required:'este campo es requerido'}, {maxLength: 25}, {minLength: 5})}
                />
                <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className='m-2'>
                <Form.Label>Nueva Contraseña</Form.Label>
                <Form.Control
                
                />
                <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>          
            </Form.Group>


            <Form.Group className='m-2'>
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control 
                {...register('password', {required:'este campo es requerido'}, {maxLength: 25}, {minLength: 5})}
                />
                <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
            </Form.Group>
          <Button className='m-3'>
          Cambiar
          </Button>
        </Form>
        </>
    )
}
