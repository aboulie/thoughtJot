import React from "react";
import "./Login.css";
import Background from '../../images/bgtest.png';

class Login extends React.Component {

  componentDidMount(){
    document.body.style.backgroundImage=`url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
    <div className="container text-center LoginStyle">
    <br /> <br />
      LOGIN
      </div>   )
    }
}
export default Login;
