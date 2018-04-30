import React, { Component } from 'react';
import Menu from '../Menu/Menu.js';
import About from '../About/About';
import Skills from '../Skills/Skills'
import './App.css';
import Portfolio from '../Portfolio/Portfolio'
import data from '../data/data.js';
import Scrollchor from 'react-scrollchor';

class App extends Component {
  constructor() {
    super ();    
    this.state = {
      portfolio: [],
      defaultTheme: true};
    this.filterPortfolio = this.filterPortfolio.bind(this);
    this.setOriginalState = this.setOriginalState.bind(this);
  }

  componentDidMount() {
    this.setOriginalState();
  }

  setOriginalState() {
    this.setState({portfolio: data})
  }


  filterPortfolio (filter) {
    const originalData = {portfolio: data}
    const filteredData = originalData.portfolio.filter ((item) => {
    return item.category.includes( filter );
    })
    this.setState ({
    portfolio: filteredData
    }) 
  }


  render() {
    return (
      <div className="App">
       <Menu />
       <About />
       <Skills />
      <Portfolio 
        portfolio = {this.state.portfolio} 
        filterFunction = {this.filterPortfolio}
        originalState = {this.setOriginalState} />
      </div>
    );
  }
}

export default App;
