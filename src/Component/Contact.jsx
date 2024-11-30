import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h4>CONTACT ME</h4>
      <div className="contact-icon"
         data-aos = "zoom-in"
          data-aos-duration = "1000"
      >
      <a href='https://www.linkedin.com/in/sharma-amrita/' className="items"><FaLinkedin className='icons'/></a>
      <a href='https://github.com/sharma-amrita' className="items"><FaGithub className='icons'/></a>
      <a href='https://www.facebook.com/aria.sharma.1232' className="items"><FaFacebook className='icons'/></a>
      <a href='mailto:amrit74sharma@gmail.com' className="items"><IoMail className='icons'/></a>
      
      </div>


    </div>
    </>
  )
}

export default Contact;
