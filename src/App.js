import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'
class App extends Component {

  
  
  render() {
    return (<div>
            <Header></Header>
{routes}
    </div>

    )
  }
}

export default App;
