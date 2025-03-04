import React, { forwardRef, useState } from 'react';
import { Send } from "lucide-react";
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../../constants/contactInfo';

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const SERVICE_ID = "service_vzx1309";
  const TEMPLATE_ID = "template_38052va";
  const USER_ID = "16wFkhh9-QEl71Ass";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending message...", {
      style: {
        background: "#172a45",
        color: "#8892b0",
        border: "1px solid #64ffda33",
      },
    });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.dismiss(loadingToast);
      toast.success("Message successfully sent! 🚀", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#112240",
          color: "#64ffda",
          border: "1px solid #64ffda",
          boxShadow: "0 4px 15px rgba(100, 255, 218, 0.1)",
        },
        iconTheme: {
          primary: "#64ffda",
          secondary: "#0a192f",
        },
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#2a1724",
          color: "#ff6464",
          border: "1px solid #ff6464",
          boxShadow: "0 4px 15px rgba(255, 100, 100, 0.1)",
        },
        icon: "❌",
        iconTheme: {
          primary: "#ff6464",
          secondary: "#0a192f",
        },
      });
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div ref={ref} className="contact-section section">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">
            Have a project in mind or want to discuss potential
            opportunities? Feel free to reach out through any of the
            channels below or use the contact form.
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-item-content">
                  <span className="contact-item-label">{info.label}</span>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-value"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-item-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="to_email"
              value={contactInfo[0].value}
            />
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactSection;