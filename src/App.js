import React, { Component } from 'react';
import './App.css';
import CardList from './Card/CardList';
import AddCard from './Card/AddCard';

class App extends Component {
  state = {
    cards: []
  }

  addNewCard = (cardInfo) => {
  	this.setState(prevState => {
    	return {
      	cards: prevState.cards.concat(cardInfo)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <AddCard onSubmit={this.addNewCard}/>
        {this.state.cards.map(cardList =>   <CardList key={cardList.id} {...cardList}/>)}
      </div>
    );
  }
}

export default App;
