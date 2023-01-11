import React,{Component} from 'react';
import axios from 'axios';

class CreateUser extends Component{
    constructor(props){
        super();
        this.state = { userName : ""}
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUserName(e){
        this.setState({
            userName : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            userName : this.state.userName
        }
        console.log(user);

        axios.post("http://localhost:5000/userapi/addUser",user).then(response => console.log(response.data));

        this.setState({
            userName : " "
        })
        window.location = "/create";
    }
    
    render(){
        return(
            <div className="container">
             <h3>Create New User</h3>
             <form onSubmit={this.onSubmit}>
              <div className="form-group">
              <label>User Name : </label>
              <input type="text" required 
              className="form-control" value={this.state.userName} onChange={this.onChangeUserName} />
              </div>
              <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
              </div>

             </form>
            </div>
        )
    }

}

export default CreateUser;