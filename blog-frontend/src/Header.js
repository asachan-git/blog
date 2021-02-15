import React from 'react'
import "./Header.css"
import {Link}  from "react-router-dom"

const Header = React.memo(() => {
    return (
        <div className="app__header">
            <p>Home</p>
            <div className="app__headerRight">
                <p>Blogs</p>
                <Link to="/login">
                    <button className="app__headerLoginBtn">Login</button>
                </Link>
                {console.log("Header")}
            </div>
            
        </div>
    )
}) 

export default Header
