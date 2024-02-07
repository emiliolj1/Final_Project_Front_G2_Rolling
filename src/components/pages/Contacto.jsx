import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container'
import FormGroup from 'react-bootstrap/FormGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  
  const {register, handleSubmit, reset, formState:{errors}} = useForm();
  
  return (
    <>
      <Container className='mt-4 py-5'>
        <h1 className='text-light text-center'>Envianos tu consulta!</h1>
        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <FormGroup className='mt-2 mb-3'>
            <Form.Label className='m-0 text-light'>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa tu nombre...'
              {...register('name', {
                required: 'Este campo es Obligatorio',
                minLength: {value: 3, message: 'Este campo no puede contener menos de 3 caracteres'},
                maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
              })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className='mb-3'>
            <Form.Label className='m-0 text-light'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Ingresa tu email...'
              {...register('email', {
                required: 'Este campo es Obligatorio',
                minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
              })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className='mb-3'>
            <Form.Label className='m-0 text-light'>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              type='text'
              placeholder='Ingresa tu mensaje...'
              {...register('message', {
                required: 'Este campo es Obligatorio',
                minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
              })}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type='invalid'>{errors.message?.message}</Form.Control.Feedback>
          </FormGroup>
          <Button type='submit' className='btn-login1'>
            Enviar!
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Contacto