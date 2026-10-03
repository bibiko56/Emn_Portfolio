import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const target = e.target;

    emailjs
      .sendForm('service_p5goper', 'template_lzzoufq', form.current, 'O3ygxYwJ62R6lStcX')
      .then(
        () => {
          alert('Message sent successfully!');
          target.reset();
        },
        () => {
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="from_name">Name</label>
          <input id="from_name" type="text" name="from_name" placeholder="Your name" required />
        </div>
        <div className="input-group">
          <label htmlFor="reply_to">Email address</label>
          <input id="reply_to" type="email" name="reply_to" placeholder="hello@example.com" required />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project" required></textarea>
      </div>

      <button type="submit" className="send-btn">Send message</button>
    </form>
  );
};

export default ContactForm;
