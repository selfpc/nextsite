// pages/index.js
import Layout from '../components/Layout';
import Link from 'next/link';


const HomePage = () => {
  return (
    <Layout>
      <div className="hero">
        <img src="/hero.png" alt="Hero Image" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our Developer Hub</h1>
          <p>
            Empowering developers to achieve more with our tools and resources.
          </p>
          <Link href="/blog" passHref>
            <button>Go to Blog</button>
          </Link>
        </div>
      </div>

      <div className="container featured-resources">
        <h2>Featured Resources</h2>
        <div className="grid">
          <div className="card">
            <img src="/hero.png" alt="Resource 1" />
            <h3>Resource 1</h3>
            <p>Description for resource 1.</p>
            <Link href="/resource1" passHref>
              <button>Learn More</button>
            </Link>
          </div>
          <div className="card">
            <img src="/hero.png" alt="Resource 2" />
            <h3>Resource 2</h3>
            <p>Description for resource 2.</p>
            <Link href="/resource2" passHref>
              <button>Learn More</button>
            </Link>
          </div>
          <div className="card">
            <img src="/hero.png" alt="Resource 3" />
            <h3>Resource 3</h3>
            <p>Description for resource 3.</p>
            <Link href="/resource3" passHref>
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="community">
        <h2>Join Our Community</h2>
        <p>
          Connect with other developers, share your projects, and get help from experts.
        </p>
        <Link href="/community" passHref>
          <button>Join Now</button>
        </Link>
      </div>
    </Layout>
  );
  
};

export default HomePage;
