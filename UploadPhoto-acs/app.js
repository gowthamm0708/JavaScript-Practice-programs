import React, { useState } from 'react';
import './Components/Photoupload.scss';

const PhotoUpload = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="photo-upload-container">
      <h2 className="photo-upload-title">Personal Details</h2>
      <div 
        className="photo-upload-box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`default-content ${isHovered ? 'hidden' : ''}`}>
          {/* Default user icon */}
          <svg width="56" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="user-icon">
            <path d="M22.675 27.0249C21.575 27.3499 20.275 27.4999 18.75 27.4999H11.25C9.72495 27.4999 8.42495 27.3499 7.32495 27.0249C7.59995 23.7749 10.9375 21.2124 15 21.2124C19.0625 21.2124 22.4 23.7749 22.675 27.0249Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 23.475 3.925 26.0625 7.325 27.025C7.6 23.775 10.9375 21.2125 15 21.2125C19.0625 21.2125 22.4 23.775 22.675 27.025C26.075 26.0625 27.5 23.475 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5ZM15 17.7125C12.525 17.7125 10.525 15.7 10.525 13.225C10.525 10.75 12.525 8.75 15 8.75C17.475 8.75 19.475 10.75 19.475 13.225C19.475 15.7 17.475 17.7125 15 17.7125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4749 13.225C19.4749 15.7 17.4749 17.7125 14.9999 17.7125C12.5249 17.7125 10.5249 15.7 10.5249 13.225C10.5249 10.75 12.5249 8.75 14.9999 8.75C17.4749 8.75 19.4749 10.75 19.4749 13.225Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* No Photo text */}
          <div className="no-photo-text">No Photo</div>
        </div>

        {/* Overlay with action icons */}
        <div className={`overlay ${isHovered ? 'visible' : ''}`}>
          {/* Gallery icon with door-like animation */}
          <div className={`gallery-icon ${isHovered ? 'open' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.50001 8.33333C8.42049 8.33333 9.16668 7.58714 9.16668 6.66667C9.16668 5.74619 8.42049 5 7.50001 5C6.57954 5 5.83334 5.74619 5.83334 6.66667C5.83334 7.58714 6.57954 8.33333 7.50001 8.33333Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8333 1.66666H7.49999C3.33332 1.66666 1.66666 3.33332 1.66666 7.49999V12.5C1.66666 16.6667 3.33332 18.3333 7.49999 18.3333H12.5C16.6667 18.3333 18.3333 16.6667 18.3333 12.5V8.33332" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 1.66666V6.66666L16.6667 4.99999" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 6.66667L13.3333 5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.22501 15.7917L6.33334 13.0333C6.99167 12.5917 7.94167 12.6417 8.53334 13.15L8.80834 13.3917C9.45834 13.95 10.5083 13.95 11.1583 13.3917L14.625 10.4167C15.275 9.85834 16.325 9.85834 16.975 10.4167L18.3333 11.5833" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Camera icon with door-like animation */}
          <div className={`camera-icon ${isHovered ? 'open' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.63333 18.3334H14.3667C16.6667 18.3334 17.5833 16.925 17.6917 15.2084L18.125 8.32502C18.2417 6.52502 16.8083 5.00002 15 5.00002C14.4917 5.00002 14.025 4.70835 13.7917 4.25835L13.1917 3.05002C12.8083 2.29169 11.8083 1.66669 10.9583 1.66669H9.05C8.19166 1.66669 7.19166 2.29169 6.80833 3.05002L6.20833 4.25835C5.975 4.70835 5.50833 5.00002 5 5.00002C3.19166 5.00002 1.75833 6.52502 1.875 8.32502L2.30833 15.2084C2.40833 16.925 3.33333 18.3334 5.63333 18.3334Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 6.66669H11.25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.99999 15C11.4917 15 12.7083 13.7833 12.7083 12.2916C12.7083 10.8 11.4917 9.58331 9.99999 9.58331C8.50832 9.58331 7.29166 10.8 7.29166 12.2916C7.29166 13.7833 8.50832 15 9.99999 15Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
