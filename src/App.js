import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

// components 
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import History from './History'
import Navigation from './Navigation'
import Help from './Help'

//scss
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {},
      url: '',
      value: 'GET',
    }
  }

  giveResults = (count, results, headers) => {
    this.setState({
      count, 
      results, 
      headers,
    });
  }


  giveQuery = (value, url) => {
    console.log(url);
    this.setState({value, url})
}


  setDisplay = (display) => {
    console.log('I am a placeholder function');
  }

  render() {
    return (
      <Router>
        <Route path='/'>
          <Header />
          <Navigation/>

        </Route>
        <Route exact path ='/'>
            <Form 
              giveResults = {this.giveResults}
              giveQuery = {this.giveQuery}
              url = {this.state.url}
              value = {this.state.value}
              count = {this.state.count}
              results = {this.state.results} 
              headers = {this.state.headers}/>
            <Footer />
        </Route>
        <Route exact path='/history'> 
          <History
           full = {true}
           handleSameQuery = {this.giveQuery} 
           setDisplay = {this.setDisplay}/>
           <Footer/>
        </Route>
        <Route exact path='/help'>
          <Help/>
          <Footer/>
        </Route>
      </Router>
    )
  }
}

export default App;