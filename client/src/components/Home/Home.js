// h1 {
//     color: white;
//     text-align: center;
//     font-family: Lucida Console;
// } 



import React from "react";
// import API from "../../utils/API";
// import axios from "axios";
import "./Home.css";
// import swal from 'sweetalert';
import Background from '../../images/journal8.jpeg';

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
    
    componentWillUnmount(){
        document.body.style.backgroundColor = null;
        //issue with unmounting
    }

    render() {
        return (<p></p>)
    }
}

export default Home;