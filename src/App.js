import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
		super(props);
		this.state = {
			fake: ["#294f1a", "#305c1e", "#a30000", "#bd0000"]
		}
	}

  getColors = async () => {
		let newColors = [];

		await axios.get('https://api.noopschallenge.com/hexbot?count=3')
			.then((result) => result.data.colors)
			.then((colors) => {
				newColors = colors.map(color => color.value);
			})

		this.setState({ fake: newColors });
    console.log(this.state.fake);
    document.querySelector('.App-header').style.backgroundColor = this.state.fake[0];
    document.querySelector('.App-header').style.color = this.state.fake[1];
    document.querySelector('.App-link').style.color = this.state.fake[2];
	}


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>This is my humble and simple app</code>
          </p>
          <a
            className="App-link"
            onClick={this.getColors}
          >
            NEW COLOR
          </a>
        </header>
      </div>
    );
  }
}

export default App;
