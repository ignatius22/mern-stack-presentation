import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import FormPost from './FormPost'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name:"",
             last_name:"",
             email:"",
             errors:{}
        }
    }
    
    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }


    render() {
        return (
            <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto display-4" >
                    <h1 className="text-center" >POST</h1>
                </div>

                <FormPost />
            </div>
        </div>
        )
    }
}

export default Profile
