import React from 'react';
import PostList from './PostList';
import data from '../../services/dataServices';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.loadPost = this.loadPosts.bind(this);

        this.state = {
            posts: []
        }
    }

    loadPosts() {
        return data.getPosts().then(data => {
            this.setState({
                posts: data
            })
        })
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div>
                <Link to='/posts/new' className='newPost hvr-icon-grow offset-10 col-2'>New Post <i className="fa fa-edit hvr-icon"></i><i class="edit"></i></Link>
                <h2 className="h2-posts"> POSTS</h2>
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}
export default Home;
