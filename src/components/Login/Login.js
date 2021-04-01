import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import google from '../../images/google.png';
import './Login.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider(); // firebase auth provider
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                }
                setLoggedInUser(signedInUser)
                history.replace(from);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (

        <div>
            <div className="text-center m-5">
                <img height="60px" src={logo} alt="LOGO"></img>
            </div>
            <div style={{ width: '28rem', paddingLeft: '20px', paddingRight: '20px', paddingTop: '120px', paddingBottom: '120px' }} className="card mx-auto text-center"
            >
                <div>
                    <h4 className="mb-5">Login With</h4>
                    <button onClick={handleLogin} style={{ borderRadius: '50px' }} className="btn btn-secondary btn-block text-left"> <img style={{ marginRight: '85px' }} height="30px" src={google} alt="GOOGLE"></img><span>Continue with Google</span></button>
                    <p>Don't have account? <Link to="/">Create account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;