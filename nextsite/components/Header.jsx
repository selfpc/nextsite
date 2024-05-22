import Link from 'next/link';

const Header = () => {
  return (
    <header>
      
      <div className="logo">
      <ul>
      <li><Link href="/"><h1>Yafreeka</h1></Link></li>
      </ul>
      </div>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: #eff;
        }
        .logo h1 {
          margin: 0;
        }
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        nav ul li {
          margin-left: 20px;
        }
        nav ul li a {
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </header>
  );
};

export default Header;
