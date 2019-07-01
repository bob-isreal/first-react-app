import React, { useState } from 'react';
import './contact-form.css';

function InputField(props) {
  const [name, setName] = useState('');
  const changeHandler = e => {
    setName(e.target.value);
  };
  return (
    <div className="form-input">
      <input
        key={props.value}
        value={name}
        onChange={changeHandler}
        type="text"
        placeholder={props.value}
        className="input-field"
      />
    </div>
  );
}
function ContactForm(props) {
  const formHandler = event => {
    let element = event.target;
    console.log(element);
  };

  return (
    <form onSubmit={formHandler}>
      <div className="flex flex-spaceout-main">
        {props.input.map(value => (
          <InputField key={value} {...{ value }} />
        ))}
      </div>
      <div className="flex flex-center-main ">
        <div className="form-input textarea-div">
          <input type="textarea" placeholder="Your Message Here" className="textarea" />
        </div>
      </div>
    </form>
  );
}
export default ContactForm;
