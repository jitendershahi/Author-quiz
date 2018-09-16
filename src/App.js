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

  selectAnswer = (title) => {
    this.props.selectAnswers(title)
  }

  render() {
    // console.log(this.props.books)
    // let authorsData = null
    // if(this.props.authors){
    //   authorsData = this.props.authors
    //   console.log(authorsData)
    // }

    // answer = () => {
    //   console.log('clickede')
    // }


    return (
      <div className="container-fluid">
        <Hero />
        <Turn  {...this.props.authors}
         bookss={this.props.books} 
         highlight={this.props.highlight}
         selectAnswer={(title) => this.selectAnswer(title)}/>
        <Footer/>
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    authors:state.authors,
    books:state.books,
    highlight:state.highlight
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callAuthors:() => dispatch(actions.getAuthorsSuccess()),
    selectAnswers:(title) => dispatch(actions.selectAnswer(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
