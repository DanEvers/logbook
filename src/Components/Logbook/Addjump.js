import React, { Component } from 'react'
import './Addjump.css'

class Addjump extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            dropzone: '',
            type: '',
            discipline: '',
            canopy: '',
            manufacturer: '',
            exitHeight: '',
            deployment: '',
            equipment: '',
            aircraft: '',
            videoURL: ''
        }
    }

        handleChange = e => {
            let { value, name } = e.target
            this.setState({
                [name] : value
            })
        }
    
        handleClick = () => {
            let {date, dropzone, type, discipline, canopy, manufacturer, exitHeight, deployment, equipment, aircraft, videoURL} = this.state
    
            let newJump = {
                date,
                dropzone,
                type,
                discipline,
                canopy,
                manufacturer,
                exitHeight,
                deployment,
                equipment,
                aircraft,
                videoURL
            }
    
            this.props.create(newJump)
    
            this.setState({
                date: '',
                dropzone: '',
                type: '',
                discipline: '',
                canopy: '',
                manufacturer: '',
                exitHeight: '',
                deployment: '',
                equipment: '',
                aircraft: '',
                videoURL: ''
            })
        }
    
    render() {
        return (
            <div className='add-container'>
                
                <input type='date' name='date' value={this.state.time} placeholder='Time' onChange={this.handleChange}/>
                <input type='text' name='dropzone' value={this.state.dropzone} placeholder='Dropzone' onChange={this.handleChange}/>
                <input type='text' name='type' value={this.state.type} placeholder='Type' onChange={this.handleChange}/>
                <input type='text' name='discipline' value={this.state.discipline} placeholder='Discipline' onChange={this.handleChange}/>
                <input type='text' name='canopy' value={this.state.canopy} placeholder='Canopy' onChange={this.handleChange}/>
                <input type='text' name='manufacturer' value={this.state.manufacturer} placeholder='Manufacturer' onChange={this.handleChange}/>
                <input type='number' name='exitHeight' value={this.state.exitHeight} placeholder='ExitHeight' onChange={this.handleChange}/>
                <input type='number' name='deployment' value={this.state.deployment} placeholder='Deployment' onChange={this.handleChange}/>
                <input type='text' name='equipment' value={this.state.equipment} placeholder='Equipment' onChange={this.handleChange}/>
                <input type='text' name='aircraft' value={this.state.aircraft} placeholder='Aircraft' onChange={this.handleChange}/>
                <input type='text' name='videoURL' value={this.state.videoURL} placeholder='videoURL' onChange={this.handleChange}/>
                <button id='button' onClick={this.handleClick}>Add Jump</button>
            </div>
        )
    }
}
    
export default Addjump