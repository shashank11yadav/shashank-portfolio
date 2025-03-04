// constants/socialLinks.js
import React from 'react';
import GithubIcon from "../components/SocialIcons/GithubIcon";
import InstagramIcon from "../components/SocialIcons/InstagramIcon";
import LeetcodeIcon from "../components/SocialIcons/LeetcodeIcon";
import LinkedinIcon from "../components/SocialIcons/LinkedinIcon";
import XIcon from "../components/SocialIcons/XIcon";

// Social media links
export const socialLinks = [
  {
    id: "github",
    icon: React.createElement(GithubIcon),
    url: "https://github.com/shashank11yadav",
  },
  {
    id: "linkedin",
    icon: React.createElement(LinkedinIcon),
    url: "https://www.linkedin.com/in/shashank-yadav-cs/",
  },
  {
    id: "leetcode",
    icon: React.createElement(LeetcodeIcon),
    url: "https://leetcode.com/u/Shashank-yadav/",
  },
  {
    id: "instagram",
    icon: React.createElement(InstagramIcon),
    url: "https://www.instagram.com/shashankyadav3032/",
  },
  { 
    id: "twitter", 
    icon: React.createElement(XIcon), 
    url: "https://x.com/Shashankyadav30" 
  },
];