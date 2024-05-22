import Layout from '../components/Layout';

const WorkPage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Our Work</h1>
        <p>
          Explore the incredible work of our talented creators on Yafreeka. From music videos to short films, there's something for everyone.
        </p>
        <p>
          Join our platform today and showcase your work to a global audience.
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

export default WorkPage;
