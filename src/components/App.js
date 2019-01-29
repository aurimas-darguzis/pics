import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component {

  onSearchSubmit(term) {
    console.log('term: ', term)
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 78f7776186e9e530c17905b85426bce8bc63995d3f7fce82dcde5f615834d2a1'
      }
    })
  }

  render() {
    return (
      <div className="ui contaier" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>)
    }
}

export default App
