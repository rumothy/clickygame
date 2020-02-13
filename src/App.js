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
  };

  selected = id => {
    console.log(`selected ${id}`);
  }

  render() {
    return (
      <div>
        <MyNav />
        <MyHeader />
        <Main>
          {this.state.characters.map(x => (<Card
              key={x.id}
              id={x.id}
              name={x.name} 
              image={x.image}
              selected={this.selected}
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
