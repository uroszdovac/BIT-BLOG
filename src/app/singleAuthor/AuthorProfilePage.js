import React from 'react';
import AuthorInfo from './AuthorInfo';
import AuthorAddress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';
import Loading from '../../partials/Loading';
import data from '../../services/dataServices';


class AuthorProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: null
        }
    }

    componentDidMount() {
        data.getAuthor(this.props.match.params.id).then(data => {
            this.setState({
                author: data
            })
        })
    }

    render() {
        return (
            (this.state.author) ?
                <div className="profile">
                    <AuthorInfo author={this.state.author} />
                    <AuthorAddress author={this.state.author} />
                    <AuthorCompany author={this.state.author} />
                </div> : <div><Loading /></div>
        )
    }
}

export default AuthorProfilePage;