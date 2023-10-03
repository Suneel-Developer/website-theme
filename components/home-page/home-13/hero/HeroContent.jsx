const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta">
      Get your{" "}<br/>
        <span className="position-relative">
        own back <img src="/images/shape/shape_114.svg" alt="img" />
        </span>
        on the energy companies!
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30">
      If I get 10k supporters I’ll start a new, community-focused energy provider.
      </p>
      <div className="d-lg-flex align-items-center">
        <input type='text' placeholder='Submit Your Email' className='demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4' />
        {/* <a
          href="contact-us.html"
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
        >
          <span>Request a demo</span>
          <img src="/images/icon/icon_91.svg" alt="img" className="ms-3" />
        </a> */}
        <div className="mb-25 text-white signIn-btn">
          SUBMIT
        </div>
      </div>
      <h2 className="fw-normal text-white mt-60 mb-5 lg-mt-40">A+ Rating</h2>
      <p className="fs-18 opacity-50 text-white">
        Avg rating 4.8 makes us world most best apps.
      </p>
    </>
  );
};

export default HeroContent;
