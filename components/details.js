/* eslint-disable @next/next/no-img-element */
const details = () => {
  return (
    <>
      <section id="details" className="pt-12 pb-16 lg:pt-16">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="mb-6">
                Results driven ground breaking technology
              </h2>
              <p className="mb-4">
                Based on our team's extensive experience in developing line of
                business applications and constructive customer feedback we
                reached a new level of revenue.
              </p>
              <p className="mb-4">
                We enjoy helping small and medium sized tech businesses take a
                shot at established Fortune 500 companies
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="xl:ml-14">
              <img
                className="inline"
                src="/images/details-1.jpg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="mb-12 lg:mb-0 xl:mr-14">
              <img
                className="inline"
                src="images/details-2.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="xl:mt-12">
              <h2 className="mb-6">
                Instant results for the marketing department
              </h2>
              <ul className="list mb-7 space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Features that will help you and your marketers</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Smooth learning curve due to the knowledge base</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Ready out-of-the-box with minor setup settings</div>
                </li>
              </ul>
              <a
                className="btn-solid-reg popup-with-move-anim mr-1.5"
                href="#details-lightbox"
              >
                Lightbox
              </a>
              <a className="btn-outline-reg" href="article.html">
                Details
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="lg:col-span-8">
                    <div className="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
                        <img className="inline rounded-lg" src="images/details-lightbox.jpg" alt="alternative" />
                    </div>
                </div> 
                <div className="lg:col-span-4">
                    <h3 className="mb-2">Goals Setting</h3>
                    <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
                    <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                    <h4 className="mt-7 mb-2.5">User Feedback</h4>
                    <p className="mb-4">This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                    <ul className="list mb-6 space-y-2">
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Splash screen panel</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Statistics graph report</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Events calendar layout</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Location details screen</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Onboarding steps interface</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg mfp-close page-scroll" href="#download">Download</a>
                    <button className="btn-outline-reg mfp-close as-button" type="button">Back</button>
                </div> 
            </div>
        </section> 
    </>
  );
};

export default details;
