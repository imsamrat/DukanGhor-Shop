import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trush from '../../images/trush.png';

const ProductList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDeleteList = (id) =>{
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log("Successfully Deleted", result)
        })
    }
    return (
        <div>
             {/* <Link to="/" className="btn btn-primary">Go Home</Link> */}
            <h4>Product list</h4>
            <div>
                <table className="table">
                    <thead>
                        <tr><th>Product Name</th><th>Weight</th><th>Price</th><th>Action</th></tr>
                    </thead>
                    <tbody>
                        {
                            products.map(item => {
                                return <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.price}</td>
                                    <td>
                                    <button className="btn btn-danger" onClick={() => handleDeleteList(`${item._id}`)}>
											<img src={trush} alt="delete" style={{ width: '21px' }} />
										</button>
                                    </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;