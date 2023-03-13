import Link from 'next/link';

const price = () => {
  return (
    <section id="pricing" className="cards-2">
      <div className="absolute bottom-0 h-40 w-full bg-white"></div>
      <div className="container px-4 pb-px sm:px-8">
        <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
          Pricing options for all budgets
        </h2>
        <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
          {' '}
          Our pricing plans are setup in such a way that any user can start
          enjoying Pavo without worrying so much about costs. They are flexible
          and work for any type of industry{' '}
        </p>

        <div className="card">
          <div className="card-body">
            <div className="card-title">STANDARD</div>
            <div className="price">
              <span className="currency">$</span>
              <span className="value">29</span>
            </div>
            <div className="frequency">monthly</div>
            <p>
              This basic package covers the marketing needs of small startups
            </p>
            <ul className="list mb-7 space-y-2 text-left">
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>List building and relations</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Seamless platform integration</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Great performance on devices</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Community support and videos</div>
              </li>
            </ul>
            <div className="button-wrapper">
              <Link className="btn-solid-reg page-scroll" href="#download">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-title">ADVANCED</div>
            <div className="price">
              <span className="currency">$</span>
              <span className="value">39</span>
            </div>
            <div className="frequency">monthly</div>
            <p>This is a more advanced package suited for medium companies</p>
            <ul className="list mb-7 space-y-2 text-left">
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>List building and relations</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Seamless platform integration</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Great performance on devices</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Community support and videos</div>
              </li>
            </ul>
            <div className="button-wrapper">
              <Link className="btn-solid-reg page-scroll" href="#download">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-title">COMPLETE</div>
            <div className="price">
              <span className="currency">$</span>
              <span className="value">49</span>
            </div>
            <div className="frequency">monthly</div>
            <p>
              This is a comprehensive package designed for big organizations
            </p>
            <ul className="list mb-7 text-left space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>List building and relations</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Seamless platform integration</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Great performance on devices</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Community support and videos</div>
              </li>
            </ul>
            <div className="button-wrapper">
              <Link className="btn-solid-reg page-scroll" href="#download">
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default price;
