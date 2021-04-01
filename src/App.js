import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AddProduct from './components/AddProduct/AddProduct';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
      name : '',
      email : '',
      date: '',
      description:'',
      img:''
  });
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/login'>
                <Login></Login>
            </Route>
            {/* <Route path='/RegEvent'>
                <RegEvent />
            </Route>
            <PrivateRoute path='/register/:key'>
                <Register></Register>
            </PrivateRoute> */}
            <Route path='/register'>
                <Login />
            </Route>
            {/* <Route path='/blog'>
                <Blog />
            </Route>
            <Route path='/events'>
                <RegEvent />
            </Route>*/}
            <Route path='/checkout/:id' >
                <Checkout />
            </Route>
            <Route path='/admin' >
                <Admin />
            </Route>
            <Route path='/addProduct' >
                <AddProduct />
            </Route> 
            <Route path='*' >
                <NotFound />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;

