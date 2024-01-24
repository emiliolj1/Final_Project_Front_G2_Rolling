import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const admin = () => {
    const { handleSubmit, register, reset } = useForm()
    const [createShow, setCShow] = useState(false);
    const [delteShow, setDShow] = useState(false);
    const [users, setUSers] = useState([]);
    const [products, setProducts] = useState([])

    const handleClose = () => {
        setCShow(false);
        setDShow(false);
        reset();
    };

    const handleShow = () => setShow(true);
    
    const getUsers = async () => {
        const response = await fetch ('',{
            method:'GET',
            headers:{'Content-type':'application/json'},
            credentials:'include'
        })
    const responseData = await response.json()
    console.log(responseData);
    setUSers(responseData.users)
    }
    useEffect(() => {
        getUsers();
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch('',{
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

    const CreateProduct = async () => {
        try {
            const response = await fetch('',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                credentials:'include'
            })
            const responseData = await response.json()
            console.log(responseData)
            getProducts();
            handleClose()            
        } catch (error) {
            console.log('error creando el producto', error);
        }
    }


    const Delete = async () => {
        try {
            const response = await fetch(`/${product.Id}`,{
                method:'DELETE',
                headers:{'Content-type':'application/json'},
                credentials:'include'
            })
            const responseData = await response.json();
            console.log(responseData);
            getProducts()
            handleClose()
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
        <Button variant="primary" onClick={() => setCShow(true)}>
            Crear Producto
        </Button>
        <Button variant="primary" onClick={() => setDShow(true)}>
            Borrar Producto
        </Button>

        <Modal 
        show={createShow} 
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
        show={delteShow} 
        onHide={handleClose} 
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Borrar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit((data) => Delete(data))}>
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
        </>
    )
}