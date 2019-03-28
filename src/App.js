import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Layout from './components/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'


class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
    
  }

  render() {
    console.log('[App.js] render')
    return (
      <div className={styleClasses.App}>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );}
}

export default App;
