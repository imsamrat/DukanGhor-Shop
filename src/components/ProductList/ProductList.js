import React, { useEffect, useState } from 'react';
import trush from '../../images/trush.png';

const ProductList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://lychee-pudding-59154.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDeleteList = (id) =>{
        console.log(id)
        fetch(`https://lychee-pudding-59154.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log("Successfully Deleted", result)
        })
    }
    return (
        <div>
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