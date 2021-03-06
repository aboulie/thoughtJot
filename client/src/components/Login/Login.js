import React from "react";
import "./Login.css";
import Background from '../../images/test2.png';
import axios from 'axios';
import swal from 'sweetalert';

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  //FUNCTION: api call, check db for user 

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
    const {email, password} = this.state;
    axios.post("/login", {
      email, password
    }).then(function(data){
        window.location.href = "/entry"
    }).catch(function(error){
      console.log("we got error");
      console.log(error);
      swal({
        title: "Uh Oh!",
        text: "Incorrect Email or Password. Try again.",
        type: "danger"
        }).then(function() {
        // Redirect the user
        console.log('The Ok Button was clicked.');
        });
    })
  }

  render() {
    return (
      <div className="container-fluid h-100">
    <div className="row justify-content-center align-items-center h-100">
    <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
           <div className="card text-center loginCard">
                <div className="card-body">
                    
                </div>
            </div>
      <form className="centered border-0">

  
        <div className="form-group">
        <p className="card-title signUpTitle">Login</p>
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="text" 
          className="form-control form-control-lg" id="exampleInputEmail1" 
          onChange = {this.handleChange} 
          value = {this.state.email}
          name = "email"/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control form-control-lg" id="exampleInputPassword1"
          onChange = {this.handleChange}
          value = {this.state.password}
          name = "password" />
        </div>

        <button type="submit" 
        className="btn btn-light btn-lg btn-block"
        onClick={(event)=>this.handleSubmit(event, this.state.searchTerm)}
        >Submit</button>

        <p className="already">Not yet a thoughtJotter? 
        <a href="/signup">Sign Up Here</a>
        </p> 
    </form>
    </div>
    
    </div>
</div>




       )
    }
}
export default Login;