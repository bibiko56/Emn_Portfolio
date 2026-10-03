import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="split">
      <div className="split-title">
        <h1>Contact me</h1>
        <p className="split-note">Have a project in mind? Send a message and I'll reply by email.</p>
      </div>
      <div className="split-body">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
