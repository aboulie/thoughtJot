import React from "react";
// import API from "../../utils/API";
// import axios from "axios";
// import swal from 'sweetalert';
import "./Reflect.css";
import Background from '../../images/background.png';
// import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {Link } from 'react-router-dom';

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
        items: Array.from({ length: 20 })
      };
  
    componentDidMount(){
        document.body.style.backgroundImage=`url(${Background})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
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
        return (
          <div className="container">
            <h1 className="test">My Enteries</h1>
            <Link to="/entry">
        <button type="submit" 
        className="btn btn-light submitStyle">Post new entry</button>
</Link>
            <hr />
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
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


export default Reflect;