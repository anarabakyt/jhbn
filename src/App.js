
import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './features/Movies';


class App extends Component{

  render(){

    return(
      <>
      <Header/>
      <Movies/>
      </>
    )
  }
  

}

export default App;
