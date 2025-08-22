// constants/contactInfo.js
import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";

export const contactInfo = [
    {
      icon: React.createElement(Mail, { size: 20 }),
      label: "Email",
      value: "yadav.shashank1201@gmail.com",
      link: "mailto:yadav.shashank1201@gmail.com",
    },
    {
      icon: React.createElement(Phone, { size: 20 }),
      label: "Phone",
      value: "+1 (857) 693-2602",
      link: "tel:+18576932602",
    },
    {
      icon: React.createElement(MapPin, { size: 20 }),
      label: "Location",
      value: "San Jose, CA",
    },
  ];