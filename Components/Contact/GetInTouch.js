"use client";
import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('wickramadharay@gmail.com');
      showNotification('Email address copied to clipboard!', 'success');
    } catch (err) {
      showNotification('Please copy manually: wickramadharay@gmail.com', 'info');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create form data for Web3Forms
      const submitData = {
        access_key: "acc72676-3c57-4692-9366-d5447c6a4d5f",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submitData)
      }).then((res) => res.json());
      
      if (res.success) {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(res.message || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="get-in-touch">
      <div className="get-in-touch-container">
        <h2 className="get-in-touch-title">Get In Touch</h2>
        <p className="get-in-touch-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name..."
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="5"
            required
          />
          <button 
            type="submit" 
            className="send-message-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        <div className="alternative-contact">
          <p className="alternative-text">Or email me directly:</p>
          <div className="email-options">
            <a 
              href="mailto:wickramadharay@gmail.com" 
              className="direct-email-btn"
            >
              📧 wickramadharay@gmail.com
            </a>
            <button 
              onClick={copyEmailToClipboard}
              className="copy-email-btn"
              type="button"
            >
              📋 Copy Email
            </button>
          </div>
        </div>

        {notification && (
          <div className={`notification notification-${notification.type}`}>
            <span>{notification.message}</span>
            <button 
              className="notification-close" 
              onClick={() => setNotification(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 