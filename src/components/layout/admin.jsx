import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const admin = () => {
    const { handleSubmit, register, reset } = useForm()
    const [CreateproductShow, setCShow] = useState(false);
    const [deleteProductShow, setDShow] = useState(false);
    const [CreateCanchaShow, setCCShow] = useState(false);
    const [deleteCanchaShow, setDCShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([])

    const handleClose = () => {
        setCShow(false);
        setDShow(false);
        setCCShow(false);
        setDCShow(false);
        reset();
    };

    const handleShow = () => {
        setCShow(true);
        setDShow(true);
        setCCShow(true);
        setDCShow(true);
    };
    
    const getUsers = async () => {
        const response = await fetch (`https://localHost:3000/users/${id}`,{
            method:'GET',
            headers:{'Content-type':'application/json'},
            credentials:'include'
        })
    const responseData = await response.json()
    console.log(responseData);
    setUsers(responseData.users)
    }
    useEffect(() => {
        getUsers();
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch(`https://localHost:3000/product/${id}`,{
                method:'GET',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include',
            })
            const responseData = await response.json()
            setProducts(responseData.products)
        } catch (error) {
            console.log('error en el fecht de los productos', error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);

    const getCanchas = async () => {
        try {
            const response = await fetch(`https://localHost:3000/canchas/${id}`,{
                method:'GET',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include',
            })
            const responseData = await response.json()
            setCanchas(responseData.canchas)
        } catch (error) {
            console.log('error en el fecht de los canchas', error);
        }
    }
    useEffect(() => {
        getCanchas();
    }, []);


    const CreateProduct = async () => {
        try {
            const response = await fetch(``,{
                method:'POST',
                headers:{'Content-type':'application/json'},
                credentials:'include'
            })
            const responseData = await response.json()
            console.log(responseData)
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


    const ProductDelete = async () => {
        try {
            const response = await fetch(`/${Id}`,{
                method:'DELETE',
                headers:{'Content-type':'application/json'},
                credentials:'include'
            })
            const responseData = await response.json();
            console.log(responseData);
            getProducts();
            handleClose();
        } catch (error) {
            
        }
    }

    const CanchaDelete = async () => {
        try {
            const response = await fetch(`${id}`,{
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
        <>
        
        <Table responsive="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Usuarios</th>
                    <th>Email</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.Title}</td>
                        <td>{product.cuantity}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {canchas.map((cancha) => (
                    <tr key={cancha.id}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <Button variant="primary" onClick={() => setCShow(true)}>
            Crear Producto
        </Button>
        <Button variant="primary" onClick={() => setDShow(true)}>
            Borrar Producto
        </Button>
        <Button variant="primary" onClick={() => setCCShow(true)}>
            Crear cancha
        </Button>
        <Button variant="primary" onClick={() => setDDShow(true)}>
            Borrar cancha
        </Button>

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
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Enter your name...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder=''
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
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
                    {...register('name', {required:'this field is required'})}
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

        <Modal 
        show={deleteProductShow} 
        onHide={handleClose} 
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Borrar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit((data) => ProductDelete(data))}>
                <Form.Group className='m-2'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Enter your name...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder=''
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
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
                    {...register('name', {required:'this field is required'})}
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
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Enter your name...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder=''
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
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
                    {...register('name', {required:'this field is required'})}
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

        <Modal 
        show={deleteCanchaShow} 
        onHide={handleClose} 
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Borrar Cancha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit((data) => CanchaDelete(data))}>
                <Form.Group className='m-2'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder='Enter your name...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label></Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='text'
                    placeholder=''
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('name', {required:'this field is required'})}
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
                    {...register('name', {required:'this field is required'})}
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
        </>
    )
}