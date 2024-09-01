'use client'
import {Carousel} from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import About from './About'
import Blog from './Blog';
import Middle from './Middle';
import pic1 from '../../assets/blood/02.jpg'
import pic2 from '../../assets/blood/01.jpg'
import pic3 from '../../assets/blood/img3.jpg'

export default function Hero() {
  return (
    
    <div className="font-sans antialiased">
      
      <main>
      <div className="relative h-96 w-full overflow-hidden">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="flex items-center justify-center h-full">
          <img src={pic1} alt="Donate Blood" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-center h-full">
          <img src={pic2} alt="Save Lives" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-center h-full">
          <img src={pic3} alt="Be A Hero" className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
        <section id="about" className="py-8 px-4">
        <Middle/>
        </section>
        <section id="cards" className="py-8 px-4 bg-gray-100">
        <Blog/>
        </section>
        <section id="contact" className="py-8 px-4">
        <About/>
        </section>
      </main>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?mr.developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/MrDeveloper" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/in/mr.developer/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedinIn size={30} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Mr. Developer. All rights reserved.
              </p>
              <p className="text-sm"></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  
  )
}
