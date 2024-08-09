import React from 'react';
import logo from "./logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer({selectedColor}) {
  return (
    <div className="bg-[#252841] py-16">
      <div className="text-center mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Subscribe to know our every single update
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <div className="flex items-center border border-white rounded-full overflow-hidden w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 bg-none text-black border-none focus:outline-none rounded-l-full"
          />
          <button style={{background:selectedColor}} className="text-white font-bold py-2 px-4 rounded-r-full">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="w-full mt-24">
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-8 px-4 md:px-16">
        <div className="mb-8 md:mb-0 md:w-1/3">
      <div className="mb-4">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <p
        className="text-white mb-4 lg:w-[60%] transition-colors duration-300"
        style={{ color: 'white' }}
        onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
      >
       Developed with Love by <i><b>Emma</b></i>
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-white transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-white transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-white transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaLinkedinIn />
        </a>
      </div>
    
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      <div className="text-white">
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Affiliates
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Partners
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Reviews
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Blogs
        </p>
      </div>
      <div className="text-white">
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Privacy Policy
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Support Area
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Documentations
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          How It Works
        </p>
      </div>
      <div className="text-white">
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Terms Of Policy
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Home
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          About Us
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Features
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Pricing
        </p>
        <p
          className="mb-2 cursor-pointer transition-colors duration-300"
          style={{ color: 'white' }}
          onMouseEnter={(e) => e.currentTarget.style.color = selectedColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          Contact
        </p>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
