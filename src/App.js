import React from 'react';
import { CardList } from './components/Card-list/card-list.component'
import './App.css';
import { Component } from 'react';
import { SearchBox } from './components/SearchBox/search-box.components';

class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters : [],
      searchField: ''
  }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField  } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <h2>monsters are subject to avaliablity</h2>
        <SearchBox 
          placeholder='type monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
                
        </CardList>

      </div>
    );
  }
}


export default App;
