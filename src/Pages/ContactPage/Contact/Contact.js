import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import ContactBanner from "../ContactBanner/ContactBanner";
import ContactWithUs from "../ContactWithUs/ContactWithUs";


const Contact = () => {
  useTitle("Contact");
  return (
    <div>
      <ContactBanner/>
      <ContactWithUs/>
      
    </div>
  );
};

export default Contact;
