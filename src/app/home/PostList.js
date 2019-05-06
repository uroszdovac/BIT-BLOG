import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
        return(
            <div>
                {props.posts.map(element => {
                    return <PostItem post={element} />
                })}              
            </div>
        )
}
export default PostList;