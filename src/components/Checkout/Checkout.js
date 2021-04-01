import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const Checkout = () => {
    const [checkout, setCheckout] = useState([]);
    
    const {id} = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setCheckout(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h4>Checkout</h4>
            <div>
                <table className="table">
                    <thead>
                        <tr><th>Description</th><th>Quantity</th><th>Price</th></tr>
                    </thead>
                    <tbody>
                          <tr key={checkout._id}>
                              <td>{checkout.name}</td>
                              <td>{checkout.weight}</td>
                              <td>{checkout.price} TK</td>
                              </tr>
                            <tr>
                                <td><h4>Total</h4></td>
                                <td></td>
                                <td><h4>{checkout.price} TK</h4></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><Button variant="success">CheckOut</Button></td>  
                            </tr>
                            
                            
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default Checkout;