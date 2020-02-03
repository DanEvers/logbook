import React, {Component} from 'react'
import './Editlog.css'

class EditLog extends Component {
    constructor(props) {
    super(props)

     this.state = {
        date: this.props.jump.date, 
        dropzone: this.props.jump.dropzone, 
        type: this.props.jump.type, 
        discipline: this.props.jump.discipline,
        canopy : this.props.jump.canopy,
        manufacturer : this.props.jump.manufacturer,
        exitHeight: this.props.jump.exitHeight, 
        deployment: this.props.jump.deployment,
        equipment: this.props.jump.equipment, 
        aircraft: this.props.jump.aircraft, 
        videoURL: this.props.jump.videoURL
        }
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let {id} = this.props.jump
        let {date, dropzone, type, discipline, canopy, manufacturer, exitHeight, deployment, equipment, aircraft, videoURL} = this.state
        
        let updatedJump = {
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
        this.props.update(id, updatedJump)
        this.props.toggle()
    }

    render() {
        return (
            <div className='content-edit'>
                <div className='main-content'>
                    <h2>Date:</h2><p><input size='40' type='date' name='date' value={this.state.time} placeholder='Time' onChange={this.handleChange}/></p><br></br>
                    <h2>Dropzone:</h2><p><input size='40' type='text' name='dropzone' value={this.state.dropzone} placeholder='dropzone' onChange={this.handleChange}/></p><br></br>
                    <h2>Type:</h2><p><input size='40' type='text' name='type' value={this.state.type} placeholder='Type' onChange={this.handleChange}/></p><br></br>
                    <h2>Discipline:</h2><p><input size='40' type='text' name='discipline' value={this.state.discipline} placeholder='Discipline' onChange={this.handleChange}/></p><br></br>
                    <h2>Canopy:</h2><p><input size='40' type='text' name='canopy' value={this.state.canopy} placeholder='Canopy' onChange={this.handleChange}/></p><br></br>
                    <h2>Manufacturer:</h2><p><input size='40' type='text' name='manufacturer' value={this.state.manufacturer} placeholder='Manufacturer' onChange={this.handleChange}/></p><br></br>
                    <h2>Exit Height (ft):</h2><p><input size='40' type='number' name='exitHeight' value={this.state.exitHeight} placeholder='ExitHeight' onChange={this.handleChange}/></p><br></br>
                    <h2>Deployment (ft):</h2><p><input size='40' type='number' name='deployment' value={this.state.deployment} placeholder='Deployment' onChange={this.handleChange}/></p><br></br>
                    <h2>Equipment:</h2><p><input size='40' type='text' name='equipment' value={this.state.equipment} placeholder='Equipment' onChange={this.handleChange}/></p><br></br>
                    <h2>Aircraft:</h2><p><input size='40' type='text' name='aircraft' value={this.state.aircraft} placeholder='Aircraft' onChange={this.handleChange}/></p><br></br>
                    <h2>Video URL:</h2><p><input size='40' type='text' name='videoURL' value={this.state.videoURL} placeholder='VideoURL' onChange={this.handleChange}/></p><br></br>
                </div>
                <div className='main-edit'>
                    <p><button id='button' onClick={this.handleClick}>Change</button></p>
                    <p><button id='button' onClick={this.props.toggle}>Cancel</button></p>
                </div>
            </div>  
        )
    }
}

export default EditLog