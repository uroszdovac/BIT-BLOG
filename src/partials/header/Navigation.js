import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col'><Link className="nav-link" to='/'>Home</Link></div>
                    <div className='col'><Link className="nav-link" to='/authors'>Authors</Link> </div>
                    <div className='col'><Link className="nav-link" to='/about'>About</Link></div>
                </div>
            </div>
        </nav>

    )
}

export default Navigation;