import React from "react";

//styles
import "./ComponentStyles.css";

//Components
import Footerlink from "./Footerlink";

// Array for nav links
const navLinks = [
  "Log In",
  "Newsletters",
  "About Us",
  "Blog",
  "Tools",
  "Publishers",
  "Help",
  "Terms",
  "Privacy Policy",
  "Data Protection",
  "Discover",
  "Sitemap",
];

// Build out the footer nav bar with Footerlink components
function Footernav() {
  return (
    <div className="Footernav">
      {navLinks.map((link, i) => {
        return <Footerlink link={link} key={i} />;
      })}
    </div>
  );
}

export default Footernav;
