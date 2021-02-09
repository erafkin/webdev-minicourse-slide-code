import './App.css';
import axios from 'axios'; 
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
   fetchData = () => {
      axios.get("https://poetrydb.org/random")
      .then((response) => {
        console.log(response);
        this.setState({data: response.data[0]})
      }).catch((error) => {
        console.log(error)
      })

  };

  renderData = () => {
    if(this.state.data) {
      return(
        <div>
          <div>{this.state.data.title}</div>
          <div>By {this.state.data.author}</div>
          {this.state.data.lines.map((line, idx) => {
            return(<div key ={idx}>{line}</div>)
          })}

        </div>
      )
    }else{
      return null
    }
  }
  render(){
    return (
      <div>
          <div>hi! Let's play around with APIs</div>
          <button onClick = {this.fetchData}>click for a poem</button>
          {this.renderData()}
      </div>
    ); 
  }
}

export default App;
