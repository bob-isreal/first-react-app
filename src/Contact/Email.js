import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Email.css';

function Email() {
  return (
    <div className="contact-single-info">
      <span className="icon">
        <FaEnvelope />
      </span>
      <span className="icon-info">bobadeprojects@gmail.com</span>
    </div>
  );
}
export default Email;
