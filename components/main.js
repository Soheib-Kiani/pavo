import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const main = () => {
  return (
    <>
      <section
        id="header"
        className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
            <h1 className="h1-large mb-5">
              Team management mobile application
            </h1>
            <p className="p-large mb-8">
              Start getting things done together with your team based on Pavo's
              revolutionary team management features
            </p>
            <Link className="btn-solid-lg" href="#your-link">
              <i className="fab fa-apple"></i>Download
            </Link>
            <Link className="btn-solid-lg secondary" href="#your-link">
              <i className="fab fa-google-play"></i>Download
            </Link>
          </div>
          <div className="xl:text-right">
            <img
              className="inline"
              src="/images/header-smartphone.png"
              alt="alternative"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4 pb-14 text-center">
          <div className="container px-4 sm:px-8 xl:px-4">
            <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
              {' '}
              Team management mobile apps don’t get better than Pavo. It’s
              probably the best app in the world for this purpose. Don’t
              hesitate to give it a try today and you will fall in love with it
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default main;
