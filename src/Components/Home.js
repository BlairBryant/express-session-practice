import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router'


class Home extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
            redirect: false,
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3500/').then(res => {
            this.setState({users: res.data})
            // console.log(this.state)
        })
    }

    loginClick() {
        // axios.put('/', {username: this.state.username}).then(res => {
        //     console.log(res.data)

        axios.post('http://localhost:3500/', {username: this.state.username}).then(res => {
            console.log(res)
        })
        //     if(!res.data.username){
        //         console.log('has fired')
        //         this.setState({redirect: true})}
        // })
    }

    registerClick() {
        axios.post('/', {username: this.state.username, password: this.state.password}).then(res => {
            console.log('promise worked')

            this.setState({redirect: true})
        })
    }


    render() {
        if(this.state.redirect) {
            return <Redirect to='/second'/>
        }

        return(
            <div>
                <h3>Username</h3>
                <input onChange={(e) => this.setState({username: e.target.value})} />
                <h3>Password</h3>
                <input onChange={(e) => this.setState({password: e.target.value})} type="password"/><br/><br/>
                <button onClick={() => this.loginClick()}>Login</button> <br/><br/><br/>
                <button onClick={() => this.registerClick()}>Register</button>
                
            </div>
        )
    }
}

export default Home

