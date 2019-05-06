import React from 'react';
import AuthorsList from "./AuthorsList";
import data from '../../services/dataServices';

class Authors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: [],
            authorsPosts: {}
        }
        this.loadAuthorPosts = this.loadAuthorPosts.bind(this);
    }

    loadAuthors() {
        return data.getAuthors().then(authors => {
            this.setState({
                authors
            })
            this.loadAuthorPosts();
        })
    }

    loadAuthorPosts() {
        this.dictionary = {};
        const promises = [];
        for (let i in this.state.authors) {
            const authorId = this.state.authors[i].id;
            promises.push(data.getAllAuthorPosts(authorId)
                .then(posts => {
                    // console.log(posts)
                    this.dictionary[authorId] = posts.length;
                    //array.push(posts.length);
                }));

        }

        Promise.all(promises).then(() => {
            console.log(this.dictionary)
            this.setState({
                authorsPosts: this.dictionary
            })
        })

    }

    componentDidMount() {
        this.loadAuthors();

    }

    render() {
        return (
            <div>
                <h2> AUTHORS ({this.state.authors.length})</h2>
                <AuthorsList authors={this.state.authors} posts={this.state.authorsPosts} />
            </div >
        )
    }
}
export default Authors;