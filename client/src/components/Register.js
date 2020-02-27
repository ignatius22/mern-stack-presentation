import React, { Component } from 'react'
import {register} from './UserFunction'



 class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            errors:{}
        }

       
    }
    handleChange = ({target}) =>{
        const {name, value} = target
        this.setState({[name]:value})
    }

    submit = (e) =>{
        e.preventDefault()

        const user = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password
        }

        register(user).then(res =>{
            this.props.history.push(`/login`)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.submit}>
                            <h1 className="h3 mb-3 font-weight-normal">please sign in</h1>

                            <div className="form-group">
                                <label htmlFor="first_name">First Name </label>
                                <input type="text" 
                                className="form-control"
                                name="first_name"
                                placeholder="Enter first name"
                                value={this.state.first_name}
                                onChange={this.handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" 
                                className="form-control"
                                name="last_name"
                                placeholder="Enter last name"
                                value={this.state.last_name}
                                onChange={this.handleChange}  />
                            </div>



                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" 
                                className="form-control"
                                name="email"
                                placeholder="Enter an email"
                                value={this.state.email}
                                onChange={this.handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                className="form-control"
                                name="password"
                                placeholder="Enter an password"
                                value={this.state.password}
                                onChange={this.handleChange}  />
                            </div>
                            <button type="submit" className="btn btn-lg  btn-primary btn-block">
                                Register
                            </button>
                        </form>
                        <a href="/login" >already got an account?</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Register
