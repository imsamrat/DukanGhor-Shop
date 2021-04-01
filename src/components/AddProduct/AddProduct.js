import { FormControl } from '@material-ui/core';
import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './AddProduct.css'
import upload from '../../images/upload.png'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState();
    const onSubmit = data => {
        const productData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('Server Side Response', res))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '16f5d7408427e03219695481eaef00f8');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-5">
                    <div className="col">
                        <input className="form-control" placeholder="Product Name" type="text" name="name" id="title" required  ref={register}/>
                    </div>
                    <div className="col">
                    <input className="form-control" placeholder="Enter Weight" type="text" name="weight" id="title" ref={register}/>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <input className="form-control" placeholder="Enter price" type="text" name="price" id="title" ref={register} />
                    </div>
                    <div className="col">
                        <div className="input-group">
                            {/* <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                            </div> */}
                            <div className="custom-file">
                                <input type="file" onChange={handleImageUpload} className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" name="" ref={register}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile03"><img height="20px" src={upload} alt="ICON"></img> Upload Photo</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>


        // <>
        //     <div 
        //     style={{width:'100%', height:'auto' , padding : '10px 0', background:'#E5E5E5'}}>
        //         <div className="container">
        //             <div className='d-flex'>
        //                 <Link to='/home'>
        //                     <img style={{ height:'70px', lineHeight:'20px'}} src={logo} alt="logo"/>
        //                 </Link>
        //                 <h4 style={{lineHeight:'60px', marginLeft:'50px'}}>
        //                     Add Product
        //                 </h4>
        //             </div>
        //         </div>
        //         <div>
        //             <div style={{width:'20%', float: 'left',
        //                 background:'#E5E5E5' , height:'100vh', marginTop:'10px',}}>
        //                 <div style={{marginLeft:'20%', marginTop:'30px'}}>
        //                     <NavLink className="nav_list" activeClassName='text-primary' to='/admin'>
        //                         Manage Product
        //                     </NavLink> <br/><br/>
        //                     <NavLink className="nav_list" activeClassName='text-primary' to='/addProduct'>
        //                         Add Product
        //                     </NavLink>
        //                 </div>
        //             </div>
        //             <div style={{width:'66%', float: 'left', background:'#ffffff',  marginTop:'50px',marginLeft:'20px'}}>

        //             <div>
        //                 <form onSubmit={handleSubmit(onSubmit)}>
        //                 <h5>Product Name</h5>
        //                 <input name="name" defaultValue="New Product" type="text" ref={register}/>
        //                 <h5>Weight</h5>
        //                 <input name="weight" type="text" ref={register}/>
        //                 <h5>Add Price</h5>
        //                 <input name="price" type="text" ref={register}/>
        //                 <h5>Add Photo</h5>
        //                 <input type="file" onChange={handleImageUpload} ref={register}/>
        //                 <input type="submit" className='btn btn-success'/>
        //                 {/* <button className='btn btn-success'>Save</button> */}
        //                 </form>
        //             </div>



        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

export default AddProduct;