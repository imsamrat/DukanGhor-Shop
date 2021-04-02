import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Checkout = (product) => {
    const [checkout, setCheckout] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    
    const {id} = useParams();


    useEffect(() => {
        fetch(`https://lychee-pudding-59154.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setCheckout(data))
    }, [])
    
    const {name, price} = checkout;
    const date = new Date();

    const handleCheckout = () => {
        const orderProduct = {...loggedInUser, name, price, date};
        fetch('https://lychee-pudding-59154.herokuapp.com/newOrder/',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderProduct)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


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
                                <Link to="/orders"><Button onClick={handleCheckout} variant="success">Checkout</Button></Link>  
                            </tr>  
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default Checkout;