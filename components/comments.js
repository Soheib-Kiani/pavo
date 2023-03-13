/* eslint-disable @next/next/no-img-element */
const comments = () => {
  return (
    <section className="slider-1 py-32 bg-gray">
      <div className="container px-4 sm:px-8">
        <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
          What do users think about Pavo
        </h2>

        <div className="slider-container">
          <div className="swiper-container card-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-1.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                      It's been so fun to work with Pavo, I've managed to
                      integrate it properly into my business flow and it's great
                    </p>
                    <p className="testimonial-author">Jude Thorn - Designer</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-2.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                      We were so focused on launching as many campaigns as
                      possible that we've forgotten to target our loyal
                      customers
                    </p>
                    <p className="testimonial-author">Roy Smith - Developer</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-3.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                      I've been searching for a tool like Pavo for so long. I
                      love the reports it generates and the amazing high
                      accuracy
                    </p>
                    <p className="testimonial-author">Marsha Singer - Marketer</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-4.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                      We've been waiting for a powerful piece of software that
                      can help businesses manage their marketing projects
                    </p>
                    <p className="testimonial-author">Tim Shaw - Designer</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-5.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                      Searching for a great prototyping and layout design app
                      was difficult but thankfully I found app suite quickly
                    </p>
                    <p className="testimonial-author">Lindsay Spice - Marketer</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card">
                  <img
                    className="card-image"
                    src="/images/testimonial-6.jpg"
                    alt="alternative"
                  />
                  <div className="card-body">
                    <p className="italic mb-3">
                      The app support team is amazing. They've helped me with
                      some issues and I am so grateful to the entire team
                    </p>
                    <p className="testimonial-author">Ann Blake - Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default comments;
