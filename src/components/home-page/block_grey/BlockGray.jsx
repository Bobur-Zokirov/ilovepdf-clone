import React from 'react';

import "./block_grey.css";

const pdf_logo = "https://www.ilovepdf.com/img/logos/pdf-association-logo.svg";
const iso_logo = "https://www.ilovepdf.com/img/logos/iso-logo.svg";
const ssl_logo = "https://www.ilovepdf.com/img/logos/ssl-encrypted-logo.svg";

const Block_gray = () => {
  return (
    <div className="block block--grey-admin">
      <div className="block__container">
        <div className="block__header">
          <div className="title1 text-center">
            The PDF software trusted by millions of users
          </div>
          <div className="subtitle text-center">
            iLovePDF is your number 1 web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure.
          </div>               
        </div>
        <div className="block__body">
          <div className="new-premium__logos " >
            <img className="pdf_logo" src={pdf_logo} alt="PDF Association" />
            <img className="iso_logo" src={iso_logo} alt="ISO27001 certified" />
            <img className="ssl_logo" src={ssl_logo} alt="Secure connection Https" />
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Block_gray