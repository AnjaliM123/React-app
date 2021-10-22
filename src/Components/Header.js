import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <>
            <ul className="header-container">
                <li className="link-item"><Link to="/">Login Form</Link></li>
                <li className="link-item"><Link to="/Home">Home</Link></li>
                 <li className="link-item"><Link to="/RegistrationPage">RegistrationPage</Link></li> 
                <li className="link-item"><Link to="/Login-Form">Login Form</Link></li>
                <li className="link-item"><Link to="/Counter">Counter</Link></li>
                <li className="link-item"><Link to="/Users-List">Users List</Link></li>
                <li className="link-item"><Link to="/Users-Details">Users Details</Link></li>
                <li className="link-item"><Link to="/CrudOperation">Crud Operation</Link></li>
                <li className="link-item"><Link to="/posts">Posts</Link></li>
                <li className="link-item"><Link to="/redux">Counter</Link></li>
                <li className="link-item"><Link to="/ReduxForm">Redux Form</Link></li>
                <li className="link-item"><Link to="/GetUsers">Get Users</Link></li>
                <li className="link-item"><Link to="/SignUpPage">SignUp Page</Link></li>
            </ul>
        </>
    )
}