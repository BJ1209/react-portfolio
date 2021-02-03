import React from 'react';
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const clickHandler = (e) => {
    e.preventDefault();
    if (email.trim() !== '' || message.trim() !== '') {
      window.open(
        `mailto:${`me.bikram.dev@gmail.com`}?subject=${subject}&body=${name}: ${message}`
      );
    }
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <form autoComplete="off" className="contact__form">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Subject"
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          cols="25"
          rows="12"
          required
        ></textarea>
        <button disabled={!email || !message} type="submit" onClick={clickHandler}>
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
