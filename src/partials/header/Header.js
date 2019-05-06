import React from 'react';
import Navigation from './Navigation';
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className='container'>
                    <h1 className="col-4">BIT Blog</h1>
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;