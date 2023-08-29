import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries:[
      {id: 1, name: 'United States', goldMedalCount: 0 },
      {id: 2, name: 'Canada', goldMedalCount: 0},
      {id: 3, name: 'United Kingdom', goldMedalCount: 0 },
    ]
  }
  handleIncrement = (countryId) => {
    const country = this.state.countries.filter(c => c.id === countryId)[0];
    country.goldMedalCount++
    this.setState({country:country});
  }
  //Subtracts the number of medals
  handleDecrement = (countryId, goldMedalCount) => {
    const country = this.state.countries.filter(c => c.id === countryId)[0];

    if(goldMedalCount > 0){
      country.goldMedalCount--
    }

    this.setState({country:country});
  }
  
  render() {
    return (
      <div className="App">
        {this.state.countries.map(country =>
        <Country
        key = { country.id }
        id = { country.id }
        name = { country.name }
        goldMedalCount = {country.goldMedalCount}
        onIncrement = { this.handleIncrement }
        onDecrement = { this.handleDecrement }/>
          )}
      </div>
    );
  }
}

export default App;
