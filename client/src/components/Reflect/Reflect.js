import React from "react";
import axios from "axios";
import "./Reflect.css";
import Background from '../../images/test2.png';
import { Redirect, Link } from 'react-router-dom';




class Reflect extends React.Component {
     state = {
        redirectToLogin: false,
        postData: []
      };
  
    componentDidMount(){
        var self = this;
        document.body.style.backgroundImage=`url(${Background})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        axios.post('/authuser')
        .then(function(data){
            self.setState({postData: data.data});
          })
          .catch(function(error){
            console.log(error);
            self.setState({ redirectToLogin: true });
        });
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

      render() {
        const { redirectToLogin } = this.state;

        if(redirectToLogin) {
          return <Redirect to={{ pathname: '/login' }} />
        } else {
        return (
          <div className="container">
            <h1 className="test">My Enteries</h1>
            <Link to="/entry">
        <button type="submit" 
        className="btn btn-light submitStyle">Post new entry</button>
        </Link>


        <button type="submit" 
        className="btn btn-light submitStyle"
        onClick={(event)=>this.handleLogout(event)}
        >Logout</button>


            <hr />
         
              {this.state.postData.map((iterator, index) => (
                <div className="card overflow-hidden">
              <div class="card-header titleStyle">
                {iterator.title}
              </div>
              <div class="card-body parchment">
               {/* <div className="imageStyle">
               <img className="img-fluid" src={iterator.image} alt={iterator.title}/>
              </div> */}

              <p class="card-text">{iterator.entry}</p>
  </div>
</div>
                
              ))}
           
          </div>
        );
      }
    }
  }


export default Reflect;