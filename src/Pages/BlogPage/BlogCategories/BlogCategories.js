import React from 'react';
import image01 from "../../../assete/OurBlogs/01.webp";
import image02 from "../../../assete/OurBlogs/02.webp";
import image03 from "../../../assete/OurBlogs/03.webp";
import image04 from "../../../assete/OurBlogs/04.webp";

const BlogCategories = () => {
    return (
        <div className='w-4/5'>
            <form >   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>
<hr className='my-10'/>

<div>
    <h1 className='text-2xl font-bold'>Categories</h1>
    <ul className='list-disc my-2 ml-6'>
        <li className='my-2'>Phtography</li>
        <li className='my-2'>Creative</li>
        <li className='my-2'>Image</li>
        <li className='my-2'>Music</li>
        <li className='my-2'>Travel</li>
        <li className='my-2'>Uncategorized</li>
        <li className='my-2'>Shopify</li>
</ul> 

</div>
<hr className='my-10'/>
<div>
<h1 className='text-2xl font-bold mb-5'>Latest Posts</h1>

<div className="grid grid-cols-4 gap-3">
  <figure className='col-span-1'><img className='' src={image01} alt="blog"/></figure>
  <div className="col-span-3">
    <h2 className="font-bold">Light Solutions For Interior</h2>
    <p className='text-gray-400'>April 4, 2023</p>
    </div>    
</div>
<div className="grid grid-cols-4 gap-3 mt-5">
  <figure className='col-span-1'><img className='' src={image02} alt="blog"/></figure>
  <div className="col-span-3">
    <h2 className="font-bold">Light Solutions For Interior</h2>
    <p className='text-gray-400'>April 4, 2023</p>
    </div>    
</div>
<div className="grid grid-cols-4 gap-3 mt-5">
  <figure className='col-span-1'><img className='' src={image03} alt="blog"/></figure>
  <div className="col-span-3">
    <h2 className="font-bold">Light Solutions For Interior</h2>
    <p className='text-gray-400'>April 4, 2023</p>
    </div>    
</div>
<div className="grid grid-cols-4 gap-3 mt-5">
  <figure className='col-span-1'><img className='' src={image04} alt="blog"/></figure>
  <div className="col-span-3">
    <h2 className="font-bold">Light Solutions For Interior</h2>
    <p className='text-gray-400'>April 4, 2023</p>
    </div>    
</div>
</div>
            
        </div>
    );
};

export default BlogCategories;