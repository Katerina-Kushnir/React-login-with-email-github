import React from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = ({user}) => {

    const navigate = useNavigate();

    const logout = useCallback(() => {
        window.open("http://localhost:5000/auth/logout", "_self");
        navigate("/login");
    }, [navigate])

    return (
        <div className="navbar">
            <span className="logo">
                <Link className="link" to="/">Lama App</Link>
            </span>
            { user ? (
                <ul className="list">
                    <li className="listItem">
                        <img 
                        src={user.photos[0].value}
                        alt="" 
                        className="avatar" />
                    </li>
                    <li className="listItem">{user.displayName}</li>
                    <li className="listItem" onClick={logout}>Logout</li>
                </ul>
            ) : (<Link className="link" to="login">Login</Link>) }
        </div>
    )
}

export default Navbar