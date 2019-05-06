import React from 'react';

const AuthorAddress = (props) => {

    return (

        <div className='row'>
            <div className="col-6 address">
                <div className="col-12">
                    <h2>Address</h2>
                </div>
                <div className="col-12">
                    <p>street: {props.author.address.street}</p>
                </div>
                <div className="col-12">
                    <p>city: {props.author.address.city}</p>
                </div>
                <div className="col-12">
                    <p>zipcode: {props.author.address.zipcode}</p>
                </div>
            </div>
            <div className="col-6">
                <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.0036452108748!2d${props.author.address.geo.lat}!3d${props.author.address.geo.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE4JzMwLjEiTiAyNsKwMzgnMTAuMyJX!5e0!3m2!1sen!2srs!4v1528453875506`} frameborder="0" allowfullscreen></iframe>
            </div>
        </div >
    )
}

export default AuthorAddress;