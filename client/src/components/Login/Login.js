import React from "react";
import "./Login.css";
import Background from '../../images/background.png';

class Login extends React.Component {
  state = {
    name: "",
    username: "",
    password: ""
  };

  //FUNCTION: api call, check db for user 

  componentDidMount(){
    document.body.style.backgroundImage=`url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  handleUsernameKeyPress = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordPress = event => {
    this.setState({
      password: event.target.value    //make this secure later
    })
  }

  handleSubmit = (event, username, password) => {
    event.preventDefault();
    //LOGIN LOGIC 
  }

  render() {
    return (
    <div className="container">
           <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                </div>
            </div>
      <form className="centered">

  
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" 
          class="form-control" id="exampleInputEmail1" 
          onKeyPress={(event)=>this.handleUsernameKeyPress(event)} />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
          onKeyPress={(event)=>this.handlePasswordPress(event)} />
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
export default Login;
