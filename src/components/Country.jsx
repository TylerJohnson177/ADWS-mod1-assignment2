import React, { Component } from 'react';
import Medal from '../components/Medal';


class Country extends Component {
   state = {
      medals:[
        {id: 1, medalType: 'Bronze', medalCount: 0},
        {id: 2, medalType: 'Silver', medalCount: 0},
        {id: 3, medalType: 'Gold', medalCount: 0},
      ]
    }

    handleIncrement = (type) => {
      const medal = this.state.medals.filter(c => c.medalType === type)[0];
      medal.medalCount++
      const { updateTotal } = this.props;
      updateTotal(this.getTotalMedals(), this.props.name);
      this.setState({medal:medal});
    }
   
    handleDecrement = (medalCount, type) => {
      const medal = this.state.medals.filter(c => c.medalType === type)[0];

      if(medalCount > 0){
         medal.medalCount--
         const { updateTotal } = this.props;
         updateTotal(this.getTotalMedals(), this.props.name);
      }
      this.setState({medal:medal});
    }

    getTotalMedals(){
      let medalsIterable = this.state.medals.map((x) => x);
      return medalsIterable.reduce((a, b) => a + b.medalCount, 0);
    }

     render(){
      const country = this.props;
      const { onDelete } = this.props;
        return (
         <div><div><b>{country.name}</b>:  {country.totalMedalCount}</div>
         {this.state.medals.map(medal =>
        <Medal
            key = { medal.id }
            id = { medal.id }
            type = { medal.medalType }
            medalCount = {medal.medalCount}
            onIncrement = { this.handleIncrement }
            onDecrement = { this.handleDecrement }/>
          )}
          <button onClick={ () => onDelete(country.id)}> Delete</button>
         <hr></hr></div>
        )
     }
}

export default Country