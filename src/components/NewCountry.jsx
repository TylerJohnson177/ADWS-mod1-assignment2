import React, { Component } from 'react';

class NewCountry extends Component {

    state = {
        showForm: false,
        countryName: '',
    }
    
    toggleForm = () => {
        const { showForm } = this.state;
        this.setState({showForm: !showForm});
        if(showForm){
            this.setState({countryName: ''});
        }
    }

    saveCountry = () => {
    const { countryName } = this.state;
    this.props.onAdd(countryName);
    this.toggleForm();
    }

    handleChange = (e) => this.setState({ countryName: e.target.value});

    render() { 
        const {showForm, countryName} = this.state;
        return (
            <div className='New-country'>
        {
          (showForm) ? 
            <form>
              <input 
                type="text"
                id="countryName"
                name="countryName"
                defaultValue={countryName}
                onChange={this.handleChange}
                placeholder="Country"
                autoFocus
                autoComplete="off" />
              <button 
                onClick={ this.saveCountry} 
                type="button"
                disabled={countryName.trim().length === 0}>
                Save
              </button>
              <button onClick={this.toggleForm} type="button">Cancel</button>
            </form>
          :
            <button onClick={this.toggleForm}>New Country</button>
        }
      </div>
        );
      }
}

export default NewCountry;