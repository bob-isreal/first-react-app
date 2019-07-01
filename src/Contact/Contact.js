import React from 'react';
import './Contact.css';
import Address from './Address';
import Email from './Email';
import PhoneNumber from './PhoneNumber';
import ContactForm from './contact-form';

function Contact() {
  const addresses = [
    '3, Rahifu Street, Adamo, Ikorodu, Lagos',
    'B&l Apartment, Atlantic View Estate, New Road, Lekki, Lagos'
  ];
  const inputFields = ['Name', 'Phone', 'Email'];
  return (
    <section>
      <h1> Contact Me</h1>
      <div className="flex">
        <div>
          <PhoneNumber />
          <Email />
        </div>

        <div>
          {addresses.map(address => (
            <Address key={address} address={address} />
          ))}
        </div>
      </div>
      <div className="contact-form-row">
        <ContactForm input={inputFields} />
      </div>
    </section>
  );
}

export default Contact;
