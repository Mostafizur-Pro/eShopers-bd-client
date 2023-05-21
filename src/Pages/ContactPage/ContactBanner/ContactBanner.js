import React from 'react';
import image01 from "../../../assete/Contactpage/image-01.png";

const ContactBanner = () => {
    return (
        <div>
            <div className="bg-orange-50 w-full h-96  px-16 ">
        <div className="flex justify-between">
          <h1 className="text-5xl mb-2">Contact</h1>
          <img src={image01} alt="" />
        </div>
      </div>
            
        </div>
    );
};

export default ContactBanner;