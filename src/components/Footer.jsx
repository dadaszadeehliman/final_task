import React from 'react'
import { CiHeart } from "react-icons/ci";

function Footer() {
  return (
    <div className='container Fouter mt-5'>
      <div className='row mt-5'>
        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Top Products</h4>
          <ul className='mt-3'>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </ul>
        </div>

        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Quick Links</h4>
          <ul className='mt-3'>
            <li>Jobs</li>
            <li>Brand Assets</li>
            <li>Investor Relations</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Features</h4>
          <ul className='mt-3'>
            <li>Jobs</li>
            <li>Brand Assets</li>
            <li>Investor Relations</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Resources</h4>
          <ul className='mt-3'>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Agencies</li>
          </ul>
        </div>
        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Newsletter</h4>
          <span className='mt-3'>Heaven fruitful doesn't over lesser in days.</span>
          <span>Appear creeping</span>
          <div className='row mt-3 container'>
            <input type="text" placeholder='Email addres' className='col-lg-6 col-sm-6' />
            <div className='col-lg-6 col-sm-6'>
              <button className='btn btn-danger'>subsrice</button>
            </div>
          </div>
        </div>
      </div>
      <h5 className='mt-5 text-center'>Copyright ©2024 All rights reserved | This template is made with <CiHeart /> by Colorlib</h5>
    </div>
  )
}

export default Footer