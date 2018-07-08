import React from "react";
import "./Entry.css";
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Background from '../../images/background.png';

class Entry extends React.Component {
  state = {
    title: "",
    entry: "",
    image: "",
    redirectToLogin: false
  };

  componentDidMount(){
    var self = this;
    document.body.style.backgroundImage=`url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
        axios.post('/authuser')
        .then(function(data){
            console.log("USER IS LOGGED IN");
          })
          .catch(function(error){
            console.log(error);
            self.setState({ redirectToLogin: true });
        })
        console.log(this.state);
  }

  handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
  }
  
  handleLogout = (event) => {
    event.preventDefault();
    axios.post("/logout", {
    }).then(function(data){
        window.location.href = "/login"
    }).catch(function(error){
      console.log("we got error");
      console.log(error);
    })
  }

 

  handleSubmit = (event) => {
    event.preventDefault();
    const {title, entry, image} = this.state;
    //post to API to add new entry to userData DB
    
    axios.post("/submit", {
      title, entry, image
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
      console.log(error);
      console.log("YOU SHALL NOT POST");
    })
  }

  render() {

    const { redirectToLogin } = this.state;

		if(redirectToLogin) {
			return <Redirect to={{ pathname: '/login' }} />
		} else {



    return (
    <div className="container">
           <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Jot Down Your Thoughts</h5>
                </div>
            </div>
      <form className="centered">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Entry Title</label>
            <input type="text" 
            className="form-control" 
            placeholder= "Required: Title"
            onChange = {this.handleChange} 
            value = {this.state.title}
            name = "title" />
        </div>
  
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">What's on your mind?</label>
          <input type="text" 
          className="form-control" 
          placeholder="Required: Thoughts"
          onChange = {this.handleChange} 
          value = {this.state.entry}
          name = "entry" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">A picture is worth 1000 words...</label>
          <input type="text" 
          className="form-control" 
          placeholder="Optional: image URL"
          onChange = {this.handleChange} 
          value = {this.state.image}
          name = "image"/>
        </div>

        <button type="submit" 
        className="btn btn-light submitStyle"
        onClick={(event)=>this.handleSubmit(event, this.state.searchTerm)}
        >Submit New Entry</button>

 <Link to="/reflect">
        <button type="submit" 
        className="btn btn-light submitStyle">See Your Entries</button>
</Link>

        <button type="submit" 
        className="btn btn-light submitStyle"
        onClick={(event)=>this.handleLogout(event)}
        >Logout</button>
        
    </form>
</div>

       )
      }
    }
}
export default Entry;
