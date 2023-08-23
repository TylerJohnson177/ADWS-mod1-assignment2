import React, { Component } from 'react';


class Country extends Component {
   
     renderNumber(number){
        return (number === undefined || number === null ? 0 : number)
     }

     render(){
      const { onIncrement, onDecrement } = this.props;
      const country = this.props;
        return (
         <div><div><b>{country.name}</b></div>Gold Medals: {this.renderNumber(country.goldMedalCount)}<div><button onClick={ () => onIncrement(country.id)} className='Medals'>+</button><button onClick={ () => onDecrement(country.id, country.goldMedalCount)} className='Medals'>-</button></div><hr></hr></div>
        )
     }
}

export default Country