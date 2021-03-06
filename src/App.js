import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import characters from "./smashCharacters.json";
import Main from './components/Main';
import MyNav from "./components/MyNav";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

class App extends React.Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    selectedCards: [],
    message: 'Click an image to begin!'
  };

  shuffleCards = (array) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    let temporaryValue = array[0];
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleCardClick = id => {
    console.log(id);
    const selectedCards = this.state.selectedCards;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (selectedCards.includes(id)) {
      this.setState( { score: 0 });
      this.setState( { selectedCards: [] });
      this.setState({message: "Wrong!"});
    }
    else {
      this.state.selectedCards.push(id);
      console.log(this.state.selectedCards);
      score++;
      if (score > topScore) {
        this.setState( {topScore: score});
      }
      this.setState( {score: score});
      this.setState({message: "You guessed correctly!"});
    }
    this.shuffleCards(characters);
    this.setState({characters});
  }

  render() {
    return (
      <div>
        <MyNav 
          score={this.state.score}
          topScore={this.state.topScore} 
          message={this.state.message}/>
        <MyHeader />
        <Main>
          {this.state.characters.map(x => (<Card
              key={x.id}
              id={x.id}
              name={x.name} 
              image={x.image}
              handleCardClick={this.handleCardClick}
            /> 
          ))}
        </Main>
        <MyFooter />
      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Card />
//     </div>
//   );
// }

export default App;
