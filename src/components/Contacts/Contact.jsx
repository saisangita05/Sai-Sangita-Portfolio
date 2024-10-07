import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ec7faefd-c5f6-40ef-8d8b-e01a198c9590");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setStatusMessage('Email sent successfully!');  // Set success message
      event.target.reset();  // Optionally clear the form
    } else {
      console.log("Error:", res);
      setStatusMessage('Failed to send email. Please try again.');  // Set error message
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Get in touch</h1>
        <div className="contact-details">
          <p><i className="fas fa-envelope"></i> saisangita.adhek05@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91-8249553946</p>
          <p><i className="fas fa-map-marker-alt"></i> BBSR, Odisha</p>
          <p>
            <i className="fab fa-linkedin"></i> 
            <a href="https://www.linkedin.com/in/sai-sangita-adhek-822687259" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </p>
          <p>
            <i className="fab fa-instagram"></i> 
            <a href="https://www.instagram.com/_crazy.dancer_/" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </p>
          <p>
            <i className="fab fa-github"></i> 
            <a href="https://github.com/saisangita05" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write your message here" required></textarea>
          <button type="submit">Submit now</button>
        </form>
        {statusMessage && <p>{statusMessage}</p>} {/* Display status message */}
      </div>
    </div>
  );
};

export default Contact;
