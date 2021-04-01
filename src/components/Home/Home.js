import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import { Container } from 'react-bootstrap';
// import '../Product/Product.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
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
                <div className="row">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }

                </div>
            </Container>


        </div>
    );
};

export default Home;