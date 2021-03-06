import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

export class App extends Component {
  componentDidMount () {
    if (this.props.catPics.length === 0) {
      this.props.fetchCats()
    }
  }

  render () {
    return (
      <div className='App'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'> CatBook </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {catPics: state.cats.pictures}
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchCats: fetchCats }, dispatch)
}
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
