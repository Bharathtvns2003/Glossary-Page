import React from 'react';
import logo from './Mark.svg';
import './Footer.css';
import LinkedIn from "./LinkedIn.svg";
import facebook from './Facebook.svg';
import insta from './Instagram.svg';
import twitter from './akar-icons_twitter-fill.svg';
import yt from './u_youtube.svg';

function Footer() {
  return (
    <div className='Footer'>
      <div className="footer_image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Footbar_contents_wrapper">
        {/* <span className='Footbar_content1'><strong>You are building india's future,</strong>we are building yours.</span> */}
      </div>
      <div className="icons_wrapper">
        <img src={LinkedIn} alt="LinkedIn" />
        <img src={facebook} alt="Facebook" />
        <img src={insta} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={yt} alt="YouTube" />
      </div>
      <div className='Footbar_line'>
        {/* Add the line under the Footer_line */}
        <div className="footer_line"></div>
      </div>
     
      <div className='CopyRights'>
      <p>2021 dezerv. All Rights Reserved</p>
      </div>
      <div className='Info'>
        <p>Mutual fund investments are subject to market risks, read all scheme related documents carefully. Past Performance of the Scheme is neither an indicator nor a guarantee of future performance.Mutual Fund distribution services are offered through Dezerv Distribution Services Pvt Limited with AMFI Registration No.: ARN -248439, a wholly owned subsidiary of Dezerv Investments Private Limited. Terms and conditions of the website are applicable. Privacy policy of the website is applicable.</p>
      </div>
    </div>
  );
}

export default Footer;
