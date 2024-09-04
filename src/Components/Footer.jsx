// // src/Components/Main/Footer.jsx

// import React from 'react';
// import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

// function Footer() {
//   const phoneNumber = '9999999999'; // phoneNumber as string for formatting
//   const emailAddress = 'abcd123@gmail.com';
//   return (
//     <footer className="bg-gray-900 text-white p-2">
//       {/* YouTube Video Section */}
//       {/* Add your YouTube video here */}

//       {/* Contact Information Section */}
//       <section className="mt-4">
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
//           <div className="flex flex-col items-center">
//             <div className="text-blue-500 text-4xl mb-2"><FaHome /></div>
//             <p className="text-gray-400">Sohraul Benipatti</p>
//             <p className="text-gray-400">Madhubani Bihar 847223</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-green-500 text-4xl mb-2"><FaPhoneAlt /></div>
//             <a href={`tel:${phoneNumber}`} className="text-white font-semibold py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
//               {phoneNumber}
//             </a>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-red-500 text-4xl mb-2"><FaEnvelope /></div>
//             <a href={`mailto:${emailAddress}`} className="text-white hover:text-gray-300 transition-colors duration-300">
//               {emailAddress}
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       {/* Embed your Google Maps iframe here */}

//       {/* Footer Bottom Section */}
//       <div className="text-center mt-4 opacity-75 text-gray-500">
//         © 2023 Your Company. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
// src/Components/Main/Footer.jsx

import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt} from "react-icons/fa";
import GetConnected from './GetConnected/GetConnected';

function Footer() {
  //const phoneNumber = '9999999999'; // phoneNumber as string for formatting
//   const emailAddress = 'abcd123@gmail.com';
  return (
    <footer className="bg-gray-800 text-white p-8 mb-0">
  {/* Contact Information Section */}
  <section className="mt-8 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4 items-center">
      <div className="flex flex-col items-center">
        <h3 className="font-bold  mb-2">Branch Office</h3>
        <p className="text-center">Sohraul Benipatti</p>
        <p className="text-center">Madhubani Bihar 847223</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl mb-2"><FaHome /></h3>
        <p className="text-center">Sohraul Benipatti</p>
        <p className="text-center">Madhubani Bihar 847223</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl mb-2"><FaPhoneAlt /></h3>
        <a href="tel:+91 7250717511" className="text-white hover:text-gray-300 transition-colors duration-300">91 7250717511</a>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl mb-2"><FaEnvelope /></h3>
        <a href="mailto:rabiyagirlsschool@gmail.com" className="text-white hover:text-gray-300 transition-colors duration-300">rabiyagirlsschool@gmail.com</a>
      </div>
    </div>
    <GetConnected />
  </section>

  {/* Footer Bottom Section */}
  <div className="text-center mt-8 opacity-50">
    © 2023 Copyright: Tahir Hussain Educational and Welfare Trust
  </div>
</footer>
  );
}

export default Footer;
