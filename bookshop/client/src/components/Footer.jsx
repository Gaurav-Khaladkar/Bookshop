import React from 'react';
//import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Aappa Movies. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
