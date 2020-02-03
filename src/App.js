import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Container from './Components/Logbook/Container'
import Addjump from './Components/Logbook/Addjump'

class App extends Component {
  constructor() {
    super()

    this.state = {
      jumps: []
    }
  }

  componentDidMount() {
    this.getJumps()
  }

  getJumps = () => {
    axios.get(`/api/jumps`)
    .then(res => this.setState({
      jumps: res.data
    }))
    .catch(err => alert('Dan, there is something wrong. Go ahead and fix that code (Axios:getJumps)', err))
  }

  getJumps = () => {
    axios.get('/api/jumps').then(res => {
      // console.log(res.data, "This is console.log of Axios.get")
      this.setState({
        jumps: res.data,
        id: 0
      })
    })
  }

  addJump = JumpInfo => {
    axios.post(`/api/add`, JumpInfo)
    .then(res => this.setState({ jumps: res.data}))
    .catch(err => alert('Dan, there is something wrong. Go ahead and fix that code (Axios:addJump)', err))
}

  updateJump = (id, JumpInfo) => {
  axios.put(`/api/update/${id}`, JumpInfo)
  .then(res => this.setState({ jumps: res.data }))
  .catch(err => alert('Dan, there is something wrong. Go ahead and fix that code (Axios:updateJump)', err))
}

  deleteJump = (id) => {
    axios.delete(`/api/delete/${id}`)
    .then(res => this.setState({jumps: res.data}))
    .catch(err => alert('Dan, there is something wrong. Go ahead and fix that code (Axios:deleteJump)', err))
    
    this.getJumps()
  }

  // Toggle functions to flick through jumps
  previous = () => {
      // console.log('Length', this.state.jumps.length, 'id:', this.state.id )
    if (this.state.id > 0) {
      this.setState({id: this.state.id-1})
    } else { this.setState({id: this.state.jumps.length -1 });}
  }

  next = () => {
    // console.log(this.state.jumps.length, this.state.id )
    if (this.state.jumps.length > this.state.id+1) {
      this.setState({id: this.state.id+1})
        } else { this.setState({id: 0 }); }
    }


  render() {
    const mappedJumps = this.state.jumps.map(jump => {
      return (
        <Container 
          jump={jump} 
          key={jump.id}
          //making functions inside Container and -> Editlog and Loginfo available here, they are props in their own component
          previous={this.previous}
          next={this.next}
          delete={this.deleteJump}
          update={this.updateJump}/>
      )
      
    })
    return (
      <div className='app-main'>
        <header className='header'>
        <h1>Logbook</h1>
        </header>
        <div>
          <p><Addjump create={this.addJump}/></p>
          {/* flicking through the mapped array of jumps inside the server logbook, see line 67 */}
          {mappedJumps[this.state.id]}
        </div>
      </div>
  )}
}

export default App;