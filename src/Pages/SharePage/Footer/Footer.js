import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <h1 className='text-4xl font-bold'>e<span className='text-orange-400'>Shoppers</span></h1>
    <p>Call us: +8801950165017</p>
    <p>Email: mostafizur0195@gmail.com</p>
  </div> 
  <div>
    <span className="footer-title text-xl">MENU</span> 
    <Link to='/about' className=" ">About Me</Link> 
    <Link to='/about' className=" ">About Service</Link> 
    <Link to='/contact' className=" ">Contact Us</Link> 
    <Link to='/blogs' className=" ">Blogs</Link>
  </div> 
  <div>
    <span className="footer-title text-xl">Services</span> 
    <Link to='/' className=" ">Shipping Policy</Link> 
    <Link to='/' className=" ">Help & Contact Us</Link> 
    <Link to='/' className=" ">Returns & Refunds</Link> 
    <Link to='/' className=" ">Terms & Conditions</Link>
  </div> 
  <div>
    <span className="footer-title text-xl">Newsletter Sign Up</span> 
    <p className=" ">Sign up for the weekly newsletter and build better ecommerce stores</p> 
    <div className='flex'>
    <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
    <button className="btn btn-error rounded-l-lg">Subscribe</button>
    </div>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;