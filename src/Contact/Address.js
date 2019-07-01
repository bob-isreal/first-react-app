import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import './Address.css'

function Address(props){
    return (
        <div className="contact-single-info">
          <span className="icon">
            <MdLocationOn />
          </span>
          <span className="icon-info">{props.address}</span>
        </div>
      );
}
export default Address