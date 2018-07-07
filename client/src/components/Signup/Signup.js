import React from "react";
import "./Signup.css";
import Background from '../../images/background.png';
import axios from 'axios';

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  componentDidMount(){
    document.body.style.backgroundImage=`url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
	}

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, email, password} = this.state;
    //post to API to add new user to DB
    axios.post("/addUser", {
      name, email, password
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
      console.log(error);
    })
  }

  render() {
    return (
    <div className="container">
           <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Sign Up Here</h5>
                </div>
            </div>
      <form className="centered">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
            <input 
            type="text" 
            className="form-control" 
            onChange = {this.handleChange}
            value = {this.state.name}
            name = "name" />
        </div>
  
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="text" 
          className="form-control" id="exampleInputEmail1" 
          onChange = {this.handleChange}
          value = {this.state.email}
          name = "email" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
          onChange = {this.handleChange}
          value = {this.state.password}
          name = "password" />
        </div>

        <button type="submit" 
        className="btn btn-light submitStyle"
        onClick={(event)=>this.handleSubmit(event, this.state.searchTerm)}
        >Submit</button>
    </form>
</div>




       )
    }
}
export default Signup;
