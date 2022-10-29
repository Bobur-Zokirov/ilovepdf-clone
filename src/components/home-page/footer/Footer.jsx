import React from 'react';

import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-main">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="title4 red">iLovePDF</div>
                    <ul className="footer-main__nav">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/features">Features</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/help/documentation">Tools</a>
                        </li>
                        <li><a href="/help/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="title4 red">Product</div>
                    <ul className="footer-main__nav">
                        <li><a href="https://developer.ilovepdf.com">Developers</a></li>
                        <li><a href="https://wordpress.org/plugins/ilovepdf/">Wordpress Plugin</a></li>
                        <li>
                            <a href="https://www.iloveimg.com/">iloveimg.com</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="title4 red">Solutions</div>
                    <ul className="footer-main__nav">
                        <li>
                            <a href="/business">Business</a>
                        </li>
                        <li>
                            <a href="/education">Education</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="title4 red">Company</div>
                    <ul className="footer-main__nav">
                        <li>
                            <a href="/help/about">Our Story</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/press">Press</a>
                        </li>
                        <li>
                            <a href="/help/legal">Legal &amp; Privacy</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="separator"></div>
            <div className="row">
                <div className="col-md-6">
                    <div class="footer-big__lang">
                        <span class="lang__current">
                            <i class="fa-solid fa-globe"></i>
                                English
                            <i class="fa-solid fa-sort-down"></i>
                        </span>
                        <ul class="lang__menu">
                            <li><a href="/"><svg aria-hidden="true" width="12" height="12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg> English</a></li>
                            <li><a href="/ru"> Pусский</a></li>
                            <li><a href="/tr"> Türkçe</a></li>
                            <li><a href="/uz"> O'zbekcha</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-main__info">
                        <div className="slogan">
                            <p>© iLovePDF 2022 ® - Your PDF Editor</p>
                        </div>
                        <div className="social">
                            <a className="social__item social__item--twitter" href="/" title="Follow us on Twitter!"><i className="fa-brands fa-twitter"></i></a>
                            <a className="social__item social__item--facebook" href="https://www.facebook.com/ilovepdfcom-238648522858564/" title="Like us on Facebook!"><i className='fa-brands fa-facebook-f'></i></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default Footer;