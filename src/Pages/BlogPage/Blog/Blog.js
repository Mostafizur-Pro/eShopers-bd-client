import React from 'react';
import BlogBanner from '../BlogBanner/BlogBanner';
import BlogBody from '../BlogBody/BlogBody';

const Blog = () => {
    return (
        <div className='mb-20'>
            <BlogBanner/>
            <BlogBody/>
        </div>
    );
};

export default Blog;