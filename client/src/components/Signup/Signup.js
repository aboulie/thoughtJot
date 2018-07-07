import React from "react";
import "./Signup.css";
import Background from '../../images/background.png';

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

  handleSubmit = (event, name, email, password) => {
    event.preventDefault();
    //LOGIN LOGIC 
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
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
            <input 
            type="text" 
            class="form-control" 
            id="exampleInputEmail1" 
            onChange = {this.handleChange}
            value = {this.state.name}
            name = "name" />
        </div>
  
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="text" 
          class="form-control" id="exampleInputEmail1" 
          onChange = {this.handleChange}
          value = {this.state.email}
          name = "email" />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
          onChange = {this.handleChange}
          value = {this.state.password}
          name = "password" />
        </div>

        <button type="submit" 
        class="btn btn-light submitStyle"
        onClick={(event)=>this.handleSubmit(event, this.state.searchTerm)}
        >Submit</button>
    </form>
</div>




       )
    }
}
export default Signup;
