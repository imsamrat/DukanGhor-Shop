import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({ product }) => {
    return (
            <div className="col-md-4">
                <Card
                    style={{ width: '270px', height: '390px', marginTop: '30px', borderRadius: '10px', border: 'none', overflow: 'hidden' }}>
                    <div style={{ overflow: 'hidden' }}>
                        <Card.Img variant="top" src={product.imageURL}
                            style={{ height: '310px' }} className='card_img'
                        />
                    </div>

                    <Card.Body className='card_text'>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Title>TK {product.price}</Card.Title>
                        <Link to={`/checkout/${product._id}`}><Button variant="success">Buy Now</Button></Link>
                    </Card.Body>
                </Card>
            </div>
    );
};

export default Product;