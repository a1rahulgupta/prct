import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
    <tr>
        <td>{props.product.userName}</td>
        <td>{props.product.name}</td>
        <td>{props.product.productType}</td>
        <td>{props.product.description}</td>
        <td><button className="btn btn-secondary">
            <Link to={"/edit/" + props.product._id} style={{ color: "white" }}>Edit</Link>
        </button>
            <button className="btn btn-danger" onClick={
                () => { props.deleteProduct(props.product._id) }}>
                Delete
            </button>
        </td>
    </tr>
)

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        const Productreq = {
            count: 10,
            pageSize: 1
        }
        axios.post("http://localhost:5000/api/getAllProduct", Productreq).then(response => {this.setState({
            products : response.data.data
        })}).catch(err => console.log(err))
    }


    deleteProduct(id) {

        axios.post("http://localhost:5000/api/deleteProduct", 
        { _id: id }).then(response => console.log(response))
        this.setState({
            products : this.state.products.filter(el => el._id !== id)
        })
    }

    productList() {
           return this.state.products.map(currentProduct => {
               return <Product product={currentProduct} deleteProduct={this.deleteProduct} key={currentProduct._id} />
           })
    }
    render() {
        return (
            <div className="container">
                <h3>Product List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }

}



export default ProductList;