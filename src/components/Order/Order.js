import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://lychee-pudding-59154.herokuapp.com/selectOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const { name, price, date,} = orders;
    console.log(orders);
    return (
        <div>
            <Header></Header>
            <h1>Your Order List:</h1>
                    <div>
                        <table className="table">
                            <thead>
                                <tr><th>Product Name</th><th>Order Date & Time</th><th>Price</th></tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order =>{
                                        return <tr>
                                        <td>{order.name}</td>
                                        <td>{order.date}</td>
                                        <td>{order.price} TK</td>
                                    </tr>
                                    })  
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default Order;