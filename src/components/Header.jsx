import React from 'react'
import { Link } from 'react-router-dom' 

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    {/* <img src="images/pwclogo.jpg" alt="logo" /> */}
                </div>
                <div>
                    <h1>PWC Student Website</h1>
                </div>
                <div>
                    <Link to = "/home" className="link">Home</Link> |
                    <Link to = "/contactUs" className="link">Contact Us</Link> |
                    <Link to = "/aboutUs" className="link">About Us</Link> |
                    <Link to = "/applicationForm" className="link">Application Form</Link> |
                    <Link to = "/gallery" className="link">Gallery</Link>
                </div>
                <button id="mode">light mode</button>
            </header>
        </div>
    )
}

export default Header