import { FormControl } from '@material-ui/core';
import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './AddProduct.css'

const AddProduct = () => {
    return (
        <>
            <div 
            style={{width:'100%', height:'auto' , padding : '10px 0', background:'#E5E5E5'}}>
                <div className="container">
                    <div className='d-flex'>
                        <Link to='/home'>
                            <img style={{ height:'70px', lineHeight:'20px'}} src={logo} alt="logo"/>
                        </Link>
                        <h4 style={{lineHeight:'60px', marginLeft:'50px'}}>
                            Add Product
                        </h4>
                    </div>
                </div>
                <div>
                    <div style={{width:'20%', float: 'left',
                        background:'#E5E5E5' , height:'100vh', marginTop:'10px',}}>
                        <div style={{marginLeft:'20%', marginTop:'30px'}}>
                            <NavLink className="nav_list" activeClassName='text-primary' to='/admin'>
                                Manage Product
                            </NavLink> <br/><br/>
                            <NavLink className="nav_list" activeClassName='text-primary' to='/addProduct'>
                                Add Product
                            </NavLink>
                        </div>
                    </div>
                    <div style={{width:'66%', float: 'left', background:'#ffffff',  marginTop:'50px',marginLeft:'20px'}}>
                        
                    <div>
                        <h5>Product Name</h5>
                        <input type="text"/>
                        <h5>Weight</h5>
                        <input type="text"/>
                        <h5>Add Price</h5>
                        <input type="text"/>
                        <h5>Add Photo</h5>
                        <input type="file"/>
                        <button className='btn btn-success'>Save</button>
                    </div>
                    


                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;