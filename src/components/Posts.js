import React from 'react';
import '../App.css';

const Posts = ({ posts, loading }) => {
    // while data is loading, the title will appear
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // returning the table with content by referring their parameters
    return (
        <table className="posts__table">
            {posts.map(post => (
                <tr className="posts__cell">
                    <td key={post.id} className="posts__item">
                    <h3 className="posts__title">{post.title}</h3>
                    <p className="posts__body">{post.body}</p>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default Posts;