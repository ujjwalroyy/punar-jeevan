// src/components/AboutPage.js

import React from 'react';
import { FaInfoCircle, FaUserFriends, FaHandsHelping, FaRocket } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About PunarJeevan</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-red-600">PunarJeevan</span>, a platform dedicated to facilitating and promoting blood donation.
          Our mission is to ensure that everyone in need of blood receives timely help and to raise awareness about the critical importance of blood donation.
        </p>
        <img
          src="https://via.placeholder.com/600x300" // Replace with an image representing your platform
          alt="PunarJeevan"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Key Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <FaInfoCircle className="text-blue-600 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Information</h3>
            <p className="text-gray-700">
              Access detailed information about blood donation, including eligibility, benefits, and the donation process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <FaUserFriends className="text-green-600 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Donors</h3>
            <p className="text-gray-700">
              Connect with registered blood donors in your area to ensure timely and effective donation matches.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <FaHandsHelping className="text-yellow-600 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Registration</h3>
            <p className="text-gray-700">
              Simple and quick registration process for both donors and recipients to join our community.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <FaRocket className="text-red-600 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Matching System</h3>
            <p className="text-gray-700">
              Our advanced system ensures the best possible matches between donors and recipients based on various factors.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="bg-white py-10 px-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">How to Use PunarJeevan</h2>
        <ol className="list-decimal pl-8 text-lg text-gray-700">
          <li className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Create an Account</h3>
            <p>
              Sign up on our platform to create your personal account. Fill in your details and complete your profile.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Search for Donors or Recipients</h3>
            <p>
              Use our search functionality to find blood donors or recipients based on your location and requirements.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Register for Donation</h3>
            <p>
              If you are a donor, register your details and availability. Recipients can request blood as needed.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Involved</h3>
            <p>
              Join our community events, share information about blood donation, and support our mission.
            </p>
          </li>
        </ol>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-700 mb-4">
          Your support can save lives. Whether you're a potential donor or a supporter, we invite you to be part of our mission.
        </p>
        <a
          href="/donate"
          className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
        >
          Get Involved
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
