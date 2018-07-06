import React from "react";
import "./Entry.css";
import Background from '../../images/background.png';

class Entry extends React.Component {
  state = {
    title: "",
    entry: "",
    image: ""
  };

  componentDidMount(){
    document.body.style.backgroundImage=`url(${Background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }


  handleTitlePress = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleEntryKeyPress = event => {
    this.setState({
      entry: event.target.value
    })
  }

  handleImagePress = event => {
    this.setState({
      image: event.target.value
    })
  }

  handleSubmit = (event, title, entry, image) => {
    event.preventDefault();
    //LOGIN LOGIC 
  }

  render() {
    return (
    <div className="container">
           <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Jot Down Your Thoughts</h5>
                </div>
            </div>
      <form className="centered">
        <div class="form-group">
          <label for="exampleInputEmail1">Entry Title</label>
            <input type="text" 
            class="form-control" 
            placeholder= "Required: Title"
            onKeyPress={(event)=>this.handleTitlePress(event)} />
        </div>
  
        <div class="form-group">
          <label for="exampleInputEmail1">What's on your mind?</label>
          <input type="text" 
          class="form-control" 
          placeholder="Required: Thoughts"
          onKeyPress={(event)=>this.handleEntryKeyPress(event)} />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">A picture is worth 1000 words...</label>
          <input type="text" 
          class="form-control" 
          placeholder="Optional: image URL"
          onKeyPress={(event)=>this.handleImagePress(event)} />
        </div>

        <button type="submit" 
        class="btn btn-light submitStyle"
        onClick={(event)=>this.handleSubmit(event, this.state.searchTerm)}
        >Submit</button>
    </form>
</div>

       )
    }
}
export default Entry;
