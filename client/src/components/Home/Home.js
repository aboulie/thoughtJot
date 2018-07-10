import React from "react";
import "./Home.css";
import Background from '../../images/journall.jpeg';

class Home extends React.Component {
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
                    <h5 className="card-title mainTitle">thoughtJot</h5>
                    <p className="card-text mainCardText">Your password protected digital diary</p>
                    <a href="/signup" className="btn btn-light signUpBtn">Get Started</a>
                </div>
            </div>
        </div>)
    }
}

export default Home;