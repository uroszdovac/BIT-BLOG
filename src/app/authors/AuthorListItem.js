import React from 'react';
import { Link } from 'react-router-dom';

const AuthorListItem = (props) => {

    return (
        <div className="listItem authors">
            <p><Link to={'/authors/' + props.id}>{props.name} ({props.posts[props.id]} posts)</Link></p>
        </div>
    )
}
export default AuthorListItem;