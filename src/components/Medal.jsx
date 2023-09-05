import React, { Component } from 'react';

class Medal extends Component {

    renderNumber(number){
        return (number === undefined || number === null ? 0 : number)
     }

    render(){
        const medal = this.props;
        const { onIncrement, onDecrement } = this.props;
          return (
           <div>{medal.type} Medals: {this.renderNumber(medal.medalCount)}<div><button onClick={ () => onIncrement(medal.type)} className='Medals'>+</button><button onClick={ () => onDecrement(medal.medalCount, medal.type)} className='Medals'>-</button></div></div>
          )
       }

}
export default Medal