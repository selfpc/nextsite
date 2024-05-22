import Layout from '../components/Layout';

const ServicesPage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Our Services</h1>
        <p>
          At Yafreeka, we offer a range of services to support content creators in their journey to success. From social marketing tools to community engagement strategies, we've got you covered.
        </p>
        <p>
          Join our platform today and explore the endless possibilities of creativity and collaboration.
        </p>
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default ServicesPage;
