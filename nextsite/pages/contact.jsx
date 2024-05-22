import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Contact Us</h1>
        <p>
          Have a question or feedback? We'd love to hear from you! Reach out to us via the following channels:
        </p>
        <ul>
          <li>Email: contact@yafreeka.com</li>
          <li>Phone: +1234567890</li>
          <li>Social Media: @yafreeka</li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        ul {
          padding-left: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default ContactPage;
