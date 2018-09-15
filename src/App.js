import React, { Component } from 'react';
import './App.css';

import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Turn from './components/Turn/Turn'

import * as actions from './Actions/ActionCreators'

import { connect } from 'react-redux'

class App extends Component {

  componentWillMount() {
    this.props.callAuthors()
  }

  render() {
    // let authorsData = null
    // if(this.props.authors){
    //   authorsData = this.props.authors
    //   console.log(authorsData)
    // }


    return (
      <div className="container-fluid">
        <Hero />
        <Turn  {...this.props.authors}/>
        <Footer/>
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    authors:state.authors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callAuthors:() => dispatch(actions.getAuthorsSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
