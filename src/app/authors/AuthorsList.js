import React from 'react';
import AuthorListItem from './AuthorListItem';

const AuthorsList = (props) => {

    return (
        <div>
            {props.authors.map(author => {

                // for (let i in props.posts) {
                return <AuthorListItem name={author.name} id={author.id} posts={props.posts} />
                // }

            })}
        </div>
    )
}
export default AuthorsList;