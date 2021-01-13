import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {}
    }
  }

  giveResults = (count, results, headers) => {
    this.setState({
      count, 
      results, 
      headers
    });
  }
  render() {
    return (
      <>
        <Header />
        <Form 
          giveResults = {this.giveResults}
          count = {this.state.count}
          results = {this.state.results} 
          headers = {this.state.headers}/>
        <Footer />
      </>
    )
  }
}

export default App;