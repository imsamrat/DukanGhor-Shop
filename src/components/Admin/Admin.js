import React, { useEffect, useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Admin.css'
import plus from '../../images/plus.png';
import manage from '../../images/manage.png';
import AddProduct from '../AddProduct/AddProduct';
import ProductList from '../ProductList/ProductList';

const Admin = () => {

    const [alternativeShow, setAlternativeShow] = useState(false)

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <div>
                    <img height="60px" src={logo} alt="LOGO"></img>
                </div>
                <div className="mt-5">
                    <p onClick={()=>setAlternativeShow(false)} className="text-primary" style={{cursor:'pointer'}}><img height="20px" src={manage} alt="ICON"></img> Manage Product</p>
                    <p onClick={()=>setAlternativeShow(true)} className="text-primary" style={{cursor:'pointer'}}><img height="20px" src={plus} alt="ICON"></img> Add Product</p>
                </div>
            </div>
            <div className="col-md-9 bg-light">
                {
                    alternativeShow ? <AddProduct></AddProduct> : <ProductList></ProductList>
                }
            </div>
        </div>
    );
};

export default Admin;