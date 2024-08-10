import React from './Footer.css'
import {Social } from '../../components/index'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>BeautyNaty</h3>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="box">
        <Social/>
        <p className='text'>Follow us to always be updated with our services that we offer to customers</p>
        </div>
        <div className="box">
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">Switzerland, Bellinzona, Via Dante, N-3</div>
          </div>
          <div className="line">
            <i className="far fa-clock fa-fw"></i>
            <div className="info">Opening Hours: From 08:00 To 19:00</div>
          </div>
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>+41000000000</span>
              <span>+39000000000</span>
            </div>
          </div>
        </div>
      </div>
      <p className="omar">{`Made With <3 By Omar Ben Aroua`}</p>
    </div>
    </>
  )
}

export default Footer