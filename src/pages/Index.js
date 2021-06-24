// using hooks to add local states to components and performing side effects
import React, { useState, useEffect } from 'react';
import '../App.css';

// importing posts and pagination to
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';

// using axios to fetch data from server
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Index() {

    // — state values — //

    // array of posts
    const [posts, setPosts] = useState([]);
    // loading the data
    const [loading, setLoading] = useState(false);
    // page by default
    const [currentPage, setCurrentPage] = useState(1);
    // posts per page
    const [postsPerPage] = useState(5);

    // — making a request — //
    useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
    }

    fetchPosts();
    }, [])

    // getting the index of the last post
    const indexOfLastPost = currentPage * postsPerPage;
    // getting the index of the first post
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // getting the current posts 
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // changing the page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <h1 className="main__title">Home</h1>
            
            {/* input is still in the making */}
            <input className="main__input" placeholder="Search..."></input>

            {/* passing the components */}
            <Posts posts={currentPosts} loading={loading}></Posts>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
        </div>
    );
}

export default Index;