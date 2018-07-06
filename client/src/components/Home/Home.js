import React from "react";
// import API from "../../utils/API";
// import axios from "axios";
import "./Home.css";
// import swal from 'sweetalert';
import Background from '../../images/journal.jpeg';

// const mainBg = {
//     backgroundImage: `url(${Background})`,
//     background: "blue",
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }



class Home extends React.Component {
    // state = {
    //     articles: []
    // }
  
    componentDidMount(){
        document.body.style.backgroundImage=`url(${Background})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
      }
    
    render() {
        return (
        <div className="container">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">thoughtJot</h5>
                    <p className="card-text">blah blah blah slogan blah blah.</p>
                    <a href="/signup" className="btn btn-light">Get Started</a>
                </div>
            </div>
        </div>)
    }
}

export default Home;