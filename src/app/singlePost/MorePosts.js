import React from 'react';
import { Link } from 'react-router-dom';


const MorePost = (props) => {
    return (
        <div>
            <h4>3 more posts from same author</h4>
            {props.userPosts.map(post => {
                return <p><Link to={'/details/' + post.id}>{post.title}</Link></p>
            })}

        </div>
    )
}

export default MorePost;