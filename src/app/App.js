import React, { Component } from 'react';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import '../sass/styles.scss'

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header/>
      <MainContent/>
      <Footer/>
      </div>
    );
  }
}
export default App;
