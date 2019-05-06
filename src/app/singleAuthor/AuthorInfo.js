import React from 'react';

const AuthorInfo = (props) => {

    return (
        <div className='row'>
            <div className='col-4'>
                <img id="icardi" src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/35/1504178496-game-of-thrones-season-8-night-king.jpg?crop=1xw:0.8886255924170616xh;center,top&resize=1200:*' alt='image' />
            </div>
            <div className='col-8'>
                <div className='row'>
                    <h2>{props.author.name}</h2>
                </div>
                <div className='row'>
                    <p>username: {props.author.username}</p>
                </div>
                <div className='row'>
                    <p>email: {props.author.email}</p>
                </div>
                <div className='row'>
                    <p>phone: {props.author.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default AuthorInfo;

