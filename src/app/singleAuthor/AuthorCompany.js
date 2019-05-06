import React from 'react'

const AuthorCompany = (props) => {

    return (

        <div className="listItem">
            <h2>Company</h2>
            <p>name: {props.author.company.name}</p>
            <p>slogan: {props.author.company.catchPhrase}</p>
        </div>
    )
}

export default AuthorCompany;