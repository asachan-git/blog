import React from 'react'
import Blog from "./Blog"

import "./Blogs.css"
function Blogs() {
    return (
        <div className="container">
            <div className="app__blogs">
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    )
}

export default Blogs
