import Link from 'next/link';

const footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the te
            <Link
              className="text-indigo-600 hover:text-gray-500"
              href="#your-link"
            >
              email@domain.com
            </Link>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </Link>
            </span>
            <span className="fa-stack">
              <Link href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-youtube fa-stack-1x"></i>
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2">
              <Link href="article.html">Article Details</Link>
            </li>
            <li className="mb-2">
              <Link href="terms.html">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link href="privacy.html">Privacy Policy</Link>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{' '}
            <Link href="#your-link" className="no-underline">
              Your name
            </Link>
          </p>

          <p className="pb-2 p-small statement">
            Distributed by :
            <Link href="https://themewagon.com/" className="no-underline">
              Themewagon
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default footer;
