import React, { Component} from 'react'
import Loginfo from './Loginfo'
import EditLog from './Editlog'

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        let {edit} = this.state
        this.setState({
            edit: !edit
        })
    }

    render() {
        return (
            <div>
            {
                this.state.edit
                ?
                <EditLog {...this.props} toggle={this.toggleEdit}/>
                :
                <Loginfo {...this.props} toggle={this.toggleEdit}/>
            }
            </div>
        )
    }
}

export default Container