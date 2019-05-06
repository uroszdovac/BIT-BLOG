import React from 'react';
import AuthorName from './AuthorName';
import MorePosts from './MorePosts';
import Loading from '../../partials/Loading';
import data from '../../services/dataServices';


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            user: null,
            userPosts: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.loadPage(nextProps.match.params.id);

    }
    componentDidMount() {
        this.loadPage(this.props.match.params.id);
    }

    loadPage(id) {
        data.getPost(id).then(post => {
            this.setState({
                post: post
            })
            data.getAuthor(post.userId).then(user => {
                this.setState({
                    user
                })
            })
            data.getAuthorPosts(post.userId, this.props.match.params.id).then(userPosts => {
                this.setState({
                    userPosts
                })
            })

        })
    }

    render() {
        return (
            (this.state.post) ?
                <div className="details">
                    <div className='row'>
                        <a href="#" className="hvr-icon-back">
                            <i className="fa fa-chevron-circle-left hvr-icon col-2"></i>
                            Back
                        </a>
                    </div>
                    <h2>{this.state.post.title}</h2>
                    {(this.state.user) ? <AuthorName user={this.state.user} /> : <Loading />}
                    <p className="detailsP">{this.state.post.body}</p>
                    {(this.state.userPosts) ? <MorePosts userPosts={this.state.userPosts} /> : <div><Loading /></div>}
                </div> : <div><Loading /></div>
        )
    }
}
export default SinglePostPage;