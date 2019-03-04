import React, { Component } from 'react';
import axios from 'axios'
import IceCream from './IceCream'


export default class IceCreamList extends Component {
  state = {
    apiDataLoaded: false,
    apiData: null
  }

  componentDidMount() {
    axios.get('./icecream')
    .then(res => {
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.data
      })
      console.log(this.state.apiData)
    })
  }

  renderIceCreams() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(d => {
        return (
          <IceCream key={d.id} icecream={d}/>
          )
      })
    } else return <p>Loading...</p>
  }

  render() {
    return(
      <div className="icecream-list">
      {this.renderIceCreams()}
      </div>
      )
  }
}
