import { serviceURL } from '../shared/constants';
import Post from '../entities/Post';
import Author from '../entities/Author'
import axios from 'axios';
import { ENGINE_METHOD_CIPHERS } from 'constants';

class DataServices {

    getPosts() {
        return axios.get(`${serviceURL}posts`)
            .then(response => {
                const result = response.data.slice(0, 20);
                return result.map(post => {
                    return new Post(post.id, post.title, post.body);
                })
            })
    }

    getAuthors() {
        return axios.get(`${serviceURL}users`)
            .then(response => {
                const result = response.data;
                return result.map(author => {
                    return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.company);
                })
            })
    }

    getAuthor(id) {
        return axios.get(`${serviceURL}users/${id}`)
            .then(response => response.data);
    }

    getPost(id) {
        return axios.get(`${serviceURL}posts/${id}`)
            .then(response => response.data)
    }

    getAuthorPosts(userId, postId) {
        return axios.get(`${serviceURL}posts?userId=${userId}`)
            .then(response => {
                const result = response.data.filter(post => post.id !== postId);
                return result.slice(0, 3)
            })
    }

    getAllAuthorPosts(userId) {
        return axios.get(`${serviceURL}posts?userId=${userId}`)
            .then(response => response.data)
    }

    sendNewPost(newPost) {
        return axios({
            method: 'post',
            url: `${serviceURL}posts`,
            data: newPost
        })
            .then(response => response.status)
    }

}

export default new DataServices();