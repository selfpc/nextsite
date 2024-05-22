import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
// pages/_app.js
import '../styles/global.css';

const blogPosts = [
  {
    title: '4 less known HTML tags',
    description: 'Pretty useful stuff!',
    image: '/Behind the Scenes A Day in the Life of a Yafreeka Content Creator (1).png'
  },
  {
    title: '7 Open Source Apps for Mac OS',
    description: 'We use at Codegrain (Mac Edition)',
    image: '/Creating Viral Content.png'
  },
  {
    title: 'Master frost gradients',
    description: 'Create frost gradients with ease',
    image: '/Introduction to Yafreeka.png'
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Sharing super ideas in simple, minimal & elegant way.</p>
      </div>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
      <style jsx>{`
        .blog-header {
          text-align: center;
          margin: 40px 0;
        }
        .blog-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}</style>
    </Layout>
  );
}
