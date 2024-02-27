import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import { Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PersonFillSlash, PersonSlash, Star, StarFill, Trash } from 'react-bootstrap-icons';



const admin = ({user}) => {
    const userResult = user;
    const [CreateproductShow, setCShow] = useState(false);
    const [CreateCanchaShow, setCCShow] = useState(false);
    const [EditProductShow, setCCCShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [canchas, setCanchas] = useState([])
    const [bookin, setBookin] = useState([])
    const {register, handleSubmit, formState:{ errors }, reset} = useForm()

    const handleClose = () => {
        setCShow(false);
        setCCCShow(false);
        setCCShow(false);
        reset();
    };

    //Traer Users
    const getUsers = async () => {
        const response = await fetch (`http://localHost:4000/admin/getUsers`,{
            method:'GET',
            headers:{'Content-type':'application/json'},
            credentials:'include'
        })
        const responseData = await response.json();

        const mappedUsers = responseData.map(user   => ({
            id: user._id,
            Name: user.name,
            Email: user.email,
            Rol: user.role,
            isActive: user.isActive
        }))
        setUsers(mappedUsers); // Aquí asigna responseData directamente
    }
    useEffect(() => {
        getUsers();
    }, []);

    //Traer Productos
    const getProducts = async () => {
        try {
          const response = await fetch(`http://localHost:4000/admin/getProducts`,{
            method:'GET',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
          })
          const responseData = await response.json()

          const mappedProducts = responseData.map(product   => ({
            id: product._id,
            Title: product.Title,
            Url: product.Url,
            Description: product.Description,
            Price: product.Price
          }))
          setProducts(mappedProducts)
        } catch (error) {
          console.log('error en el pedido de los productos', error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    
    //Traer Canchas
    const getCanchas = async () => {
        try {
          const response = await fetch(`http://localHost:4000/admin/getCanchas`,{
            method:'GET',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
          })
          const responseData = await response.json()

          const mappedCanchas = responseData.map(cancha   => ({
            id: cancha._id,
            Title: cancha.Title,
            Url: cancha.Url,
            Description: cancha.Description,
            Array: cancha.Array
          }))
          // const bookins = mappedCanchas.Array.map(bookin => ({
          //   id: bookin._id,
          //   name: bookin.name,
          //   date: bookin.date 
          // })) 
          // console.log(bookins);
          // setBookin(bookin)
          setCanchas(mappedCanchas)
        } catch (error) {
          console.log('error en el pedido de los canchas', error);
        }
    }
    useEffect(() => {
        getCanchas();
    }, []);
    useEffect(() => {
    }, [canchas]);
    
    const changeRole = async (id) => {
        console.log(id);
        try {
          const response = await fetch(`http://localHost:4000/admin/changeRole`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({id: id})
          });
          const responseData = await response.json();
          console.log(responseData);
          // Vuelve a cargar la lista de usuarios después de cambiar el rol
          getUsers();
        } catch (error) {
          console.log('Error cambiando el rol del usuario', error);
        }
    };

    const userDisable = async (id) => {
        try {
          const response = await fetch(`http://localHost:4000/admin/userActive`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ id: id })
          });
          const responseData = await response.json();
          console.log(responseData);
          // Vuelve a cargar la lista de usuarios después de cambiar el rol
          getUsers();
        } catch (error) {
          console.log('Error al inhabilitar el usuario', error);
        }
    };
     
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/admin/deleteUser`,{
                method:'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ id: id })
            });
            const responseData = await response.json();
            console.log(responseData);
            getUsers();
            handleClose();
        } catch (error) {
            console.log('Error al intentar eliminar el usuario:', error);
        }
    }

    const CreateProduct = async (data) => {
        try {
            console.log(data)
            const response = await fetch(`http://localhost:4000/admin/createProduct`,{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(data),
                credentials:'include'
            })
            const responseData = await response.json()
            console.log(responseData)
            console.log(data)
            getProducts();
            handleClose();  
        } catch (error) {
            console.log('error creando el producto', error);
        }
    }

    const CreateCancha = async () => {
        try {
            const response = await fetch(``,{
                method:'POST',
                headers:{'Content-type':'application/json'},
                credentials:'include'
            })
            const responseData = await response.json();
            console.log(responseData);
            getCanchas();
            handleClose();
        } catch (error) {
            
        }
    }

    const ProductDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/admin/deleteProduct`,{
                method:'DELETE',
                headers: { 'Content-type': 'application/json' },
                credentials:'include',
                body: JSON.stringify({ id: id })
            })
            const responseData = await response.json();
            console.log(responseData);
            getProducts();
            handleClose();
        } catch (error) {
            console.log('error catch')
        }
    }

    const CanchaDelete = async (id) => {
      console.log(id);
        try {
            const response = await fetch(`http://localhost:4000/admin/deleteCancha`,{
                method:'DELETE',
                headers:{'Content-type':'application/json'},
                credentials:'include',
                body: JSON.stringify({ id: id })
            })
            const responseData = await response.json();
            console.log(responseData);
            getCanchas();
            handleClose();
        } catch (error) {
          console.log('error catch')
        }
    }

    return(
      <Container className='mt-5 py-3'>
        <div className="text-light text-center py-3 fs-6 text">
            <h2 direction="horizontal" >Bienvenido Administrador {userResult.userInfo.Name}!👋​</h2>
        </div> 
        <Container fluid>
          <h4 className="fw-bold text-light mx-3 text-decoration-underline">Usuarios registrados</h4>
          <Row className="justify-content-center mt-5 mx-3">
            <Table className='text-center' striped bordered hover responsive="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  {
                    user && userResult.userInfo.Role === 'Master' 
                    ?
                      <>
                        <th>Acciones</th>
                      </>
                    :
                      <>
                      </> 
                  }
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className='align-middle fw-bold'>{user.Name}</td>
                      <td className='align-middle'>{user.Email}</td>
                      <td className='align-middle'>{user.Rol}</td>
                      {
                        user && userResult.userInfo.Role === 'Master' 
                        ?
                          <>
                            <td>
                              <Button onClick={() =>changeRole(user.id)} className='text-warning fs-4 g-0 p-0  transparent mb-2'>
                                {
                                  user.Rol !== 'client' 
                                  ? 
                                    <StarFill/> 
                                  : 
                                    <Star/>
                                }
                              </Button>
                              <Button onClick={() => userDisable(user.id)} className='text-danger g-0 p-0 fs-4 mx-3 transparent mb-2'>
                                {
                                  user.isActive !== true 
                                  ? 
                                    <PersonFillSlash/> 
                                  : 
                                    <PersonSlash/>
                                }
                              </Button>
                              <Button className='me-1 fs-4 g-0 p-0 text-danger transparent mb-2' onClick={() => deleteUser(user.id)}>
                                <Trash/>
                              </Button>
                            </td>
                          </>
                          :
                          <>
                          </> 
                      }  
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Row>
          <h4 className="mt-5 fw-bold text-light mx-3 text-decoration-underline">Productos</h4>
          <Row className="justify-content-center mt-5 mx-3">
            <Table striped bordered hover responsive="sm" className='text-center'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Imagen</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product) => (
                    <tr key={product.id}>
                      <td className='align-middle fw-bold'>{product.Title}</td>
                      <td><Image src={product.Url} style={{height: '6rem'}} alt={product.Title}/></td>
                      <td className='align-middle'>{product.Description}</td>
                      <td className='align-middle'>${product.Price}</td>
                      <td className='align-middle'>
                        <Button className='fs-4 text-danger transparent' onClick={() => ProductDelete(product.id)}>
                          <Trash/>
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Row>
          <Container className='mb-5'>
            <Button className="btn-login1" onClick={() => setCShow(true)}>
              Crear Producto
            </Button>
          </Container>
          <h4 className="fw-bold text-light mx-3 text-decoration-underline">Canchas</h4>
          <Row className="justify-content-center my-5 mx-3">  
            <Table striped bordered hover responsive="sm" className='text-center'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Reservas</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  canchas.map((cancha) => (
                    <tr key={cancha.id}>
                      <td className='align-middle fw-bold'>{cancha.Title}</td>
                      <td className='align-middle'>{cancha.Description}</td>
                      <td className='align-middle'>{cancha.array}</td>
                      <td className='align-middle'>
                        <Button className='fs-4 text-danger transparent' onClick={() => CanchaDelete(cancha.id)}>
                          <Trash/>
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Row>  
        </Container>
        
        <Container fluid className="text-center mb-5">
          <Link to='/home'>
            <Button className="fw-bold fs-4 btn-login1">
              Volver al Inicio
            </Button>
          </Link>
        </Container>

        <Modal 
          show={CreateproductShow} 
          onHide={handleClose} 
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Crear producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit((data) => CreateProduct(data))}>
              <Form.Group className='m-2'>
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese un título...'
                  {...register('Title', {
                    required:'this field is required',
                    minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                    maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
                  })}
                  isInvalid={!!errors.Title} 
                />
                <Form.Control.Feedback type='invalid'>{errors.Title?.message}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='m-2'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea" 
                  type='text'
                  placeholder='ingrese una descripción'
                  {...register('Description', {
                    required:'this field is required',
                    minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                    maxLength: {value: 120, message: 'Este campo no puede contener mas de 120 caracteres'}
                  })}
                  isInvalid={!!errors.Description}
                />
                <Form.Control.Feedback type='invalid'>{errors.Description?.message}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='m-2'>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  className='ms-0 me-5 pe-5' 
                  type='number'
                  placeholder='Ingrese el precio...'
                  isInvalid={!!errors.Price}
                  // the method register allows you to register an input or select element and apply validations rules
                  // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                  {...register('Price')}
                />
                <Form.Control.Feedback type='invalid'>{errors.Price?.message}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='m-2'>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  className='ms-0 me-5 pe-5' 
                  type='text'
                  placeholder='Ingrese la url de la imagen...'
                  isInvalid={!!errors.Url}
                  // the method register allows you to register an input or select element and apply validations rules
                  // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                  {...register('Url', {required:'this field is required'})}
                />
                <Form.Control.Feedback type='invalid'>{errors.Url?.message}</Form.Control.Feedback>
              </Form.Group>
              <Button className='btn-login1' type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal 
          show={CreateCanchaShow} 
          onHide={handleClose} 
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Crear cancha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit((data) => CreateCancha(data))}>
            <Form.Group className='m-2'>
              <Form.Label>Nombre de la Cancha</Form.Label>
              <Form.Control
                className='ms-0 me-5 pe-5' 
                type='text'
                placeholder='Ingrese un título...'
                isInvalid={!!errors.title}
                // the method register allows you to register an input or select element and apply validations rules
                // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                // {...register('name', {required:'this field is required'})}
              />
              <Form.Control.Feedback type='invalid'>{errors.title?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='m-2'>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                className='ms-0 me-5 pe-5' 
                type='text'
                placeholder='Ingrese una descripción...'
                isInvalid={!!errors.description}
                // the method register allows you to register an input or select element and apply validations rules
                // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                // {...register('name', {required:'this field is required'})}
              />
              <Form.Control.Feedback type='invalid'>{errors.description?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='m-2'>
              <Form.Label></Form.Label>
              <Form.Control
                className='ms-0 me-5 pe-5' 
                type='text'
                placeholder='Enter your name...'
                isInvalid={!!errors.name}
                // the method register allows you to register an input or select element and apply validations rules
                // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                // {...register('name', {required:'this field is required'})}
              />
              <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-login1'>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
      </Container>
    )
}


export default  admin