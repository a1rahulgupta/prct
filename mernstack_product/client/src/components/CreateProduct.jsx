import React, { Component } from 'react';
import axios from 'axios';

class CreateProduct extends Component {
    constructor(props) {
        super();
        this.state = {
            userName: "",
            name: "",
            description: "",
            productType: "",
            users : []
        }
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:5000/userapi/getAllUsers").then(response => {
            //console.log(response);
            if(response.data.data.length>0){
                this.setState({
                    users : response.data.data.map(user => user.userName),
                    userName : response.data.data[0].userName
                })
            }

        })
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }

    onChangeProductName(e) {
        this.setState({
            name: e.target.value
        })
    }



    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeProductType(e) {
        this.setState({
            productType: e.target.value
        })
    }

    onSubmit(e) {
        console.log("Hi",e);
        e.preventDefault();
        const product = {
            name : this.state.name,
            userName: this.state.userName,
            description: this.state.description,
            productType: this.state.productType
        }
        console.log("Hello",product);
        axios.post("http://localhost:5000/api/addProduct", product).then(response => console.log(response));
        window.location = "/";
    }





    render() {
        return (

            <div className="container">
                <h3>
                    Create New Product
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name :</label>
                        <select ref="userInput" required
                            className="form-control" value={this.state.userName}
                            onChange={
                                this.onChangeUserName
                            }>
                            {this.state.users.map(function (user) { return <option key={user} value={user}>{user}</option> })} </select>
                    </div>
                    <div className="form-group">
                        <label>Product Name :</label>
                        <input type="text" required className="form-control"
                            value={this.state.name} onChange={this.onChangeProductName} />


                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" required className="form-control"
                            value={this.state.description} onChange={this.onChangeDescription} />

                    </div>
                    <div className="form-group">
                        <label>ProductType</label>
                        <input type="text" required className="form-control"
                            value={this.state.productType} onChange={this.onChangeProductType} />

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />

                    </div>


                </form>


            </div>
        )
    }


}



export default CreateProduct;