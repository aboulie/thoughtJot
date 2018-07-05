import React from "react";
import "./NoMatch.css";

class NoMatch extends React.Component {

  componentDidMount(){
    document.body.style.backgroundImage=null;
  }

  render() {
    return (
    <div className="container text-center noMatchStyle">
    <br /> <br />
      404 Page Not Found :(
      </div>   )
    }
}
export default NoMatch;
