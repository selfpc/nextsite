import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Yafreeka</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Company News</a></li>
                <li><a href="#">Jobs and Internships</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Yafreeka Platform</h3>
              <ul>
                <li><a href="#">Status</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Privacy Center</a></li>
                <li><a href="#">Transparency Center</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Download the Yafreeka App</h3>
              <ul>
                <li><a href="#">Embed a Post</a></li>
                <li><a href="#">Download the App</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>X Corp.</h3>
              <ul>
                <li><a href="#">About the Company</a></li>
                <li><a href="#">Brand Toolkit</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Yafreeka. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        footer {
          background-color: #efff;
          color: #fff;
          padding: 40px 0;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .footer-columns {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .footer-column {
          flex: 1;
          margin-right: 20px;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color:#333;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 8px;
        }
        a {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #ccc;
        }
        .copyright {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default Layout;
