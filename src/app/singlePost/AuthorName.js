import React from 'react';
import { Link } from 'react-router-dom';

const AuthorName = (props) => {

    return (
        <h3><Link to={'/authors/' + props.user.id}>{props.user.name}</Link></h3>
    )
}

export default AuthorName;