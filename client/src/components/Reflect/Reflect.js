import React from "react";
// import API from "../../utils/API";
import axios from "axios";
// import swal from 'sweetalert';
import "./Reflect.css";
import Background from '../../images/background.png';
// import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Redirect, Link } from 'react-router-dom';

const style = {
    margin: "0 auto",
    height: 200,
    maxWidth: 800,
    minWidth: 800,
    border: "1px solid",
    marginBottom: 10,
    padding: 10,
    background: "white",
    fontFamily: "Lucida Sans"
  };


class Reflect extends React.Component {
     state = {
        items: Array.from({ length: 8 }),
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
            console.log("USER IS LOGGED IN");
            self.setState({postData: data.data});
            console.log(data.data);
          })
          .catch(function(error){
            console.log(error);
            self.setState({ redirectToLogin: true });
        });
        // this.showPosts();
      }
    
      // showPosts() {
      //     var self = this;
      //     var id = this.props.match.params.id;
      //     console.log("ID " + self.state.id);
      
      //     axios.post('/grabposts/' + id)
      //     .then(function(data){
      //       console.log("DATA--------");
      //       console.log(data);
      //       console.log("data id= " + self.state.id);
      //       //HOW TO GET ACTUAL POST?!?!?

      //     })
      //     .catch(function(error){
      //       console.log(error);
      //     });
      // }

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

    
      fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
          });
        }, 1500);
      };
    
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
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>More Entries Loading...</h4>}
            >
              {this.state.items.map((i, index) => (
                <div 
                style={style} key={index}>
                  div - #{index}
                </div>
              ))}
            </InfiniteScroll>
          </div>
        );
      }
    }
  }


export default Reflect;