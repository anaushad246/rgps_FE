import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram,  faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function GetConnected() {
    const whatsappNumber = '7654746192'; // Replace with your WhatsApp number
  const message = 'Hello, I would like to inquire about...'; // Default message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="flex flex-row items-center justify-center gap-4 ">
              <a href="https://www.facebook.com/Chiragh.welfare.foundation?mibextid=ZbWKwL/" className="text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://www.twitter.com/" className="text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.instagram.com/" className="text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a href="https://www.youtube.com/" className="text-neutral-600 dark:text-neutral-200">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
  )
}

export default GetConnected