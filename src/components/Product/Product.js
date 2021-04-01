import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({ product }) => {
    return (
            <div className="col-md-4">
                {/* <Link className='body_content' to={`/register/${FakeData.key}`}> */}
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
                        {/* <p>$ {product.price}</p> */}
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>
                </Card>
                {/* </Link> */}
            </div>


        // <div className="col-md-3">
        //     <img style={{height: '300px'}} src={product.imageURL} alt=""/>
        //     <h3>{product.name}</h3>
        //     <p>$ {product.price}</p>
        //     <button>Buy Now</button>
        // </div>
    );
};

export default Product;