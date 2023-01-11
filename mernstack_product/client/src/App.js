import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

function App(){
    return(
        <BrowserRouter>
        <Navbar />
        <br/>
        <Route exact path="/" component={ProductList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/create" component={CreateProduct}/>
        <Route path="/edit/:id" component={EditProduct} />
        
        </BrowserRouter>
    )
}

export default App;