import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import { Container, Spinner } from 'react-bootstrap';


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://lychee-pudding-59154.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header />
            <div className="body_title text-center">
                    <div className="search_input my-4 d-flex justify-content-center">
                        <input type="text" style={{width:'470px'}}
                         className='form-control'/>
                        <button
                        className='btn btn-info mx-1'
                        >Search</button>
                    </div>

                </div>
            <Container>
                <div className="row justify-content-md-center">
                    {products.length === 0 && <Spinner animation="border" variant="success" />}
                    {
                        products.map(product => <Product product={product}></Product>)
                    }

                </div>
            </Container>
        </div>
    );
};

export default Home;