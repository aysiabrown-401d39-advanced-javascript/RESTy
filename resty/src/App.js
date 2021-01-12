import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "empty words",
    }
  }


  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App;