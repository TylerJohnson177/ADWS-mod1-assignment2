import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';
import NewCountry from './components/NewCountry';

class App extends Component {
  state = {
    countries:[
      {id: 1, name: 'United States', totalMedalCount: 0 },
      {id: 2, name: 'Canada', totalMedalCount: 0},
      {id: 3, name: 'United Kingdom', totalMedalCount: 0 },
    ]
  }
  
  handleUpdateTotal = (count, countryName) => {
    const country = this.state.countries.filter(c => c.name === countryName)[0];
    country.totalMedalCount = count;
    this.setState({country:country});
  }
  getGrandTotal(){
    let countriesIterable = this.state.countries.map((x) => x);
      return countriesIterable.reduce((a, b) => a + b.totalMedalCount, 0);
  }

  handleAdd = (name) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    console.log(id);
    const mutableCountries = countries.concat({ id: id, name: name, totalMedalCount: 0});
    this.setState({ countries:mutableCountries });
  }

  handleDelete = (countryId) => {
    const countries = this.state.countries.filter( c => c.id !== countryId);
    this.setState({countries:countries});
  }

  render() {
    return (
      <div className="App">
        <header><h3>Total Medal Count: {this.getGrandTotal()}</h3></header>
        <hr></hr>
        {this.state.countries.map(country =>
        <Country 
        updateTotal= { this.handleUpdateTotal }
        key = { country.id }
        id = { country.id }
        name = { country.name }
        totalMedalCount = {country.totalMedalCount}
        onDelete={this.handleDelete}
        />
          )}
        <NewCountry onAdd={ this.handleAdd } />
      </div>
    );
  }
}

export default App;
