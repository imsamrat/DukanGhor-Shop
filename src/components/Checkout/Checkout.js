import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const [checkout, setCheckout] = useState([]);
    const {_id} = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
        .then(res => res.json())
        .then(data => setCheckout(data))
    }, [])
    return (
        <div>
            <h4>Checkout</h4>
            <div>
                <table className="table">
                    <thead>
                        <tr><th>Description</th><th>Quantity</th><th>Price</th></tr>
                    </thead>
                    <tbody>
                        {
                           checkout.map(item => {
                               return <tr><td>{item.name}</td><td>{item.weight}</td><td>{item.price}</td></tr>
                           })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;