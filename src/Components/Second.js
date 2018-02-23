import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Second extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    render() {
        console.log('a')
        return(
            <div>
                <Link to='/'><button>Home</button></Link> <br/><br/>
                This is the second page
                <br/><br/><br/>
                <p>display session here</p>
            </div>
        )
    }
}

export default Second