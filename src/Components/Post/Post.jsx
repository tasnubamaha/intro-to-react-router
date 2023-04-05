import React from 'react';
import './Post.css';
import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
     navigate(`/post/${id}`);
    }



    return (
        <div className='post'>
            <h5>Id: {id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>show details</Link>
            <Link to={`/post/${id}`}><button>show post details</button></Link>
            <button onClick={handleNavigation}>with btn handler</button>
        </div>
    );
};

export default Post;