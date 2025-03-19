import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <footer className="bg-sfgreen-dark text-white py-5 px-10 md:px-20 lg:px-40 xl:px-80 h-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center items-start">
            <div className="flex gap-4 justify-center">
                <img src="/SouthFayetteLogo.png" alt="SF Logo" className="h-[120px]" />
                <img src="/NationalHonorSocietyLogo.png" alt="NHS Logo" className="h-[130px] -ml-8" />
            </div>

            <div>
                <h4 className="mb-2 font-semibold">Our Location</h4>
                <p>3640 Old Oakdale Road</p> 
                <p>McDonald, PA 15057</p>
            </div>

            <div>
                <h4 className="mb-2 font-semibold">About Us</h4>
                <p>
                    We are dedicated to fostering STEM education and leadership through community engagement and innovation.
                </p>
            </div>

            <div>
                <div className="mb-4 flex gap-4">
                    <a href="#" className="text-white hover:text-gray-300">
                        <InstagramIcon />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <XIcon />
                    </a>
                </div>
                <div className="mb-4">
                    <a href="#" className="mr-4 text-white hover:underline">About Us</a>
                    <a href="#" className="mr-4 text-white hover:underline">Contact</a>
                    <a href="#" className="text-white hover:underline">Privacy Policy</a>
                </div>
                <div className="text-sm text-gray-300">
                    © 2025 All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
