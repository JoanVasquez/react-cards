import React, { Component } from 'react';
import axios from 'axios';

class AddCard extends Component {
  state = { userName: '' }

  handlerSubmit = (event) => {
		event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`).then(resp => {
    	this.props.onSubmit(resp.data);
      this.setState({ userName: '' });
    });
	}

  render(){
    //ref={input => this.userNameInput = input}
    return(
      <form onSubmit={this.handlerSubmit}>
    	  <input
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        	type="text" placeholder="Github username..."/>
        <button type="Submit">Add Card</button>
    	</form>
    );
  }
}

export default AddCard;
