import React from 'react'

const Header = () => {
    return (
        <nav className='#536dfe indigo accent-2, header__nav'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;