import React from "react";
import "./Signup.css";
import Background from '../../images/bgtest.png';

class Signup extends React.Component {

  componentDidMount(){
    document.body.style.backgroundImage=`url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
    <div className="container text-center SignupStyle">
    <br /> <br />
      SIGNUP
      </div>   )
    }
}
export default Signup;
