import React from 'react'
import './Loginfo.css'

function Loginfo(props) {
    const {id, date, dropzone, type, discipline, canopy, manufacturer, exitHeight, deployment, equipment, aircraft, videoURL} = props.jump
    return (
        <div className='loginfo-grid'>
            <div className='main-content'>
                <h2>Jump Count:</h2><p>{id}</p><br></br>
                <h2>Date:</h2><p>{date}</p><br></br>
                <h2>Dropzone:</h2><p>{dropzone}</p><br></br>
                <h2>Type:</h2><p>{type}</p><br></br>
                <h2>Discipline:</h2><p>{discipline}</p><br></br>
                <h2>Canopy:</h2><p>{canopy}</p><br></br>
                <h2>Manufacturer:</h2><p>{manufacturer}</p><br></br>
                <h2>Exit Height (ft):</h2><p>{exitHeight}</p><br></br>
                <h2>Deployment (ft):</h2><p>{deployment}</p><br></br>
                <h2>Harness Equipment:</h2><p>{equipment}</p><br></br>
                <h2>Aircraft:</h2><p>{aircraft}</p><br></br>
                <h2>Video URL:</h2><p><iframe src={videoURL} allow="autoplay; fullscreen" allowfullscreen></iframe></p>
            </div>
                <div className='main-edit'>
                    <button id='button' onClick={() => props.previous(props.id)}>Previous</button>
                    <button id='button' onClick={props.toggle}>Edit Jump</button>
                    <button id='button' onClick={() => props.delete(id)}>Delete Jump</button>
                    <button id='button' onClick={() => props.next(props.id)}>Next</button>
                </div>
        </div>
    )
}
    
export default Loginfo