import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Analytics</li>
            <li className="py-1">Data</li>
            <li className="py-1">Energy Savings</li>
            <li className="py-1">Tools and Diagnostics</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Documentation</li>
            <li className="py-1">Data</li>
            <li className="py-1">Digital Building Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Careers</li>
            <li className="py-1">Testimonials</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms and Conditions</li>
            <li className="py-1">Copyrights</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            Subscribe to the Digital Building Monthly Tips and Tricks
          </p>
          <p className="py-4">
            Get monthly information on new resources and Application notes sent
            to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder='Email' />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 3Amigos, LLC. All rights reserved</p>
      </div>
      <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
      </div>
    </div>
  );
}

export default Footer