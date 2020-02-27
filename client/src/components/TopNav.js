import React, { Component } from 'react'
import {Link , withRouter} from 'react-router-dom'

class TopNav extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/login`)
    }





    render() {
        const loginRegLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
        
        const userLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>

                <li className="nav-item">
                    <a href="" className="nav-link" onClick={this.logOut.bind(this)}>
                        LogOut
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded  justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
            </nav>
        )
    }
}

export default  withRouter(TopNav)
