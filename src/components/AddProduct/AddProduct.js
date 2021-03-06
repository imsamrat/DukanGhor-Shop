import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        const url = `https://lychee-pudding-59154.herokuapp.com/addProduct`;

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
    );
};

export default AddProduct;