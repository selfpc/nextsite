const BlogCard = ({ title, description, image }) => {
    return (
      <div className="blog-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <style jsx>{`
          .blog-card {
            border: 1px solid #eaeaea;
            border-radius: 5px;
            padding: 20px;
            max-width: 300px;
          }
          .blog-card img {
            max-width: 100%;
            border-radius: 5px;
          }
          .blog-card h3 {
            margin: 10px 0;
          }
        `}</style>
      </div>
    );
  };
  
  export default BlogCard;
  