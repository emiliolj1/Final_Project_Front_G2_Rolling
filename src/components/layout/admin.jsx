import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import { Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'


const admin = ({user}) => {
    const userResult = user;
    const [CreateproductShow, setCShow] = useState(false);
    const [CreateCanchaShow, setCCShow] = useState(false);
    const [EditProductShow, setCCCShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [canchas, setCanchas] = useState([])
    const {register, handleSubmit, formState:{ errors }, reset} = useForm()

    const handleClose = () => {
        setCShow(false);
        setCCCShow(false);
        setCCShow(false);
        reset();
    };

    // const handleShow = () => {
    //     setCShow(true);
    //     setDShow(true);
    //     setCCShow(true);
    //     setDCShow(true);
    // };
    

    //TRAER USERS

    const getUsers = async () => {
        const response = await fetch (`http://localHost:4000/admin/getUsers`,{
            method:'GET',
            headers:{'Content-type':'application/json'},
            credentials:'include'
        })
        const responseData = await response.json();
        console.log(responseData);

        const mappedUsers = responseData.map(user   => ({
            id: user.id,
            Name: user.Name,
            Email: user.email,
            Rol: user.role
        })
            )

            console.log(mappedUsers)

        setUsers(responseData); // Aquí asigna responseData directamente
        console.log(users);
    }
    useEffect(() => {
        getUsers();
    }, []);

    

    const getProducts = async () => {
        try {
            const response = await fetch(`http://localHost:4000/admin/getProducts`,{
                method:'GET',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include',
            })
            const responseData = await response.json()
            console.log(responseData)

            const mappedProducts = responseData.map(product   => ({
                Title: product.Title,
                Url: product.Url,
                description: product.description,
                price: product.role
            }))
            console.log(mappedProducts)

            setProducts(responseData)
            
        } catch (error) {
            console.log('error en el pedido de los productos', error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    



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
                description: cancha.description,
                Array: cancha.array
            }))
            console.log(mappedCanchas)

            setCanchas(mappedCanchas)
            console.log(canchas);

        } catch (error) {
            console.log('error en el pedido de los canchas', error);
        }
    }
    useEffect(() => {
        getCanchas();
    }, []);
    useEffect(() => {
        console.log(canchas);
    }, [canchas]);
    

      const changeRole = async ( _id ) => {
        try {
          const response = await fetch(`http://localHost:4000/admin/changeRole/${_id}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ _id})
          });
          const responseData = await response.json();
          console.log(responseData);
          console.log(user)
          // Vuelve a cargar la lista de usuarios después de cambiar el rol
          getUsers();
        } catch (error) {
          console.log('Error cambiando el rol del usuario', error);
        }
      };

      const userDisable = async (userEmail) => {
        try {
          const response = await fetch(`http://localHost:4000/admin/userActive`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email: userEmail})
          });
          const responseData = await response.json();
          console.log(responseData);
          // Vuelve a cargar la lista de usuarios después de cambiar el rol
          getUsers();
        } catch (error) {
          console.log('Error al inhabilitar el usuario', error);
        }
      };
     

      const deleteUser = async (_id) => {
        try {
            const response = await fetch(`http://localhost:4000/admin/deleteUser/${_id}`,{
                method:'DELETE',
                credentials:'include'
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

    const EditProduct = async (data) => {
        try {
            console.log(data)
            const response = await fetch(`http://localhost:4000/admin/EditProduct`,{
                method:'PUT',
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


    const ProductDelete = async (_id) => {
        try {
            const response = await fetch(`http://localhost:4000/admin/deleteProduct/${_id}`,{
                method:'DELETE',
                credentials:'include',
            })
            const responseData = await response.json();
            console.log(responseData);
            getProducts();
            handleClose();
        } catch (error) {
            console.log('error catch')
        }
    }

    const CanchaDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/canchas/${Id}`,{
                method:'DELETE',
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
                  {users.map((user) => (
                    <tr key={user._id}>
                        <td className='fw-bold'>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>

                        {
                            user && userResult.userInfo.Role === 'Master' 
                              ?
                                 <>
                                   <td>
                                      <i className={`bi ${user.role === 'admin' ? 'bi-star-fill' : 'bi-star'} text-warning fs-4`} onClick={() =>changeRole(user._id)}></i>
                                      <i className={`bi ${user.isActive === true ? 'bi-person-slash' : 'bi-person-fill-slash'} text-danger fs-4 mx-3 px-3`} onClick={() => userDisable(user._id)}></i>
                                      <i className="bi bi-trash3 fs-4 text-danger" onClick={() => deleteUser(user._id)}></i>
                                   </td>
                                 </>
                              :
                                 <>
                                 </> 
                        }
                                    
                          
                    </tr>
                  ))}
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
                  {products.map((product) => (
                    <tr key={product._id}>
                        <td className='fw-bold'>{product.Title}</td>
                        <td><Image src={product.Url} style={{height: '6rem'}} alt="Imagen no encontrada"/></td>
                        <td>{product.Description}</td>
                        <td>${product.Price}</td>
                        <td>
                            <i className="bi bi-pencil-square fs-4 text-secondary mr-3 pr-3" onClick={() => setCCCShow(true)}></i>
                            <i className="bi bi-trash3 fs-4 text-danger ml-3 pl-3" onClick={() => ProductDelete(product._id)}></i>
                        </td>
                    </tr>
                  ))}
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
                  {canchas.map((cancha) => (
                    <tr key={cancha._id}>
                        <td className='fw-bold'>{cancha.Title}</td>
                        <td>{cancha.Description}</td>
                        <td>{cancha.Array}</td>
                        <td>
                            <i className="bi bi-pencil-square fs-4 text-secondary mr-3 pr-3"></i>
                            <i className="bi bi-trash3 fs-4 text-danger" onClick={() => CanchaDelete(cancha.id)}></i>
                        </td>
                    </tr>
                  ))}
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
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Crear producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit((data) => CreateProduct(data))}>
                <Form.Group className='m-2'>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='ingrese un título...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Title', {
                        required:'this field is required',
                        minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                        maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
                    })}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    as="textarea" 
                    type='text'
                    placeholder='ingrese una descripción'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Description', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='number'
                    placeholder='Ingrese el precio...'
                    isInvalid={!!errors.price}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Price')}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Ingrese la url de la imagen...'
                    isInvalid={!!errors.url}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Url', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>



        
        <Modal 
        show={EditProductShow} 
        onHide={handleClose} 
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Editar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit((data) => EditProduct(data))}>
                <Form.Group className='m-2'>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control
                    type='text'
                    defaultValue={products.Title}
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Title', {
                        required:'this field is required',
                        minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                        maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
                    })}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    as="textarea" 
                    type='text'
                    placeholder='ingrese una descripción'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Description', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='number'
                    placeholder='Ingrese el precio...'
                    isInvalid={!!errors.price}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Price')}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Ingrese la url de la imagen...'
                    isInvalid={!!errors.url}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('Url', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>


        <Modal 
        show={CreateCanchaShow} 
        onHide={handleClose} 
        animation={false}>
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
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    // {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Íngrese una descripción...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    // {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Enter your name...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    // {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </Container>
    )
}


export default  admin