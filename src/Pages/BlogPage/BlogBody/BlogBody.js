import React from 'react';
import BlogCategories from '../BlogCategories/BlogCategories';
import BlogDetails from '../BlogDetails/BlogDetails';

const BlogBody = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1'>
                <BlogCategories/>
            </div>
            <div className='col-span-2'>
                <BlogDetails/>
            </div>
            
        </div>
    );
};

export default BlogBody;