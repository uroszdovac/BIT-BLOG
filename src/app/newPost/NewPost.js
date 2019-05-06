import React from 'react';
import data from '../../services/dataServices';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NewPost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            status: false
        }

        this.titleHandler = this.titleHandler.bind(this);
        this.contentHandler = this.contentHandler.bind(this);
        this.save = this.save.bind(this);
        this.checkStatus = this.checkStatus.bind(this);

    }

    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }

    contentHandler(event) {
        this.setState({
            content: event.target.value
        })
    }

    save() {
        let newPost = {
            userId: 1,
            title: this.state.title,
            content: this.state.content
        }
        data.sendNewPost(newPost)
            .then(response => {
                if (response >= 200 && response < 300) {
                    this.setState({
                        status: true
                    })
                }
            })
    }
    checkStatus() {
        if (this.state.status) {
            return <Redirect to="/" />
        }
    }
    render() {
        return (
            <div className="newPostForm">
                <h2>NEW POST</h2>

                <div className="row">
                    <h3>Title</h3>
                    <input onChange={this.titleHandler} type='text' placeholder="Post title" className="input" />
                    <h3>Content</h3>
                    <textarea onChange={this.contentHandler} placeholder="Put some text here..."></textarea>
                </div>

                <div className="row">
                    <div className="col-2 offset-8">
                        <Link to="/"><input type='button' value="Cancel" id="button1" /></Link>
                    </div>
                    <div className="col-2">
                        <input onClick={this.save} type='button' value="Save" id="button2" />
                    </div>
                </div>
                {this.checkStatus()}
            </div>
        )
    }
}

export default NewPost;