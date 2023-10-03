import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div className="col-xl-8 m-auto text-center">
      <div className="title-style-ten aos-init aos-animate" data-aos="fade-up">
        <h2 className="main-title font-recoleta fw-normal tx-dark">
        Have Any Project? <br/>
        <span className="position-relative">
          Let's Talk{' '}
            <img src="/images/shape/shape_132.svg" alt='logo' />
        </span>
        & Grow your Business
        </h2>
      </div>
      <p className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
      We’r ready to help you. Our expert is here, just send a message.
      </p>
      <Link className="btn-twenty fw-500 tran3s wow fadeInUp aos-init aos-animate" data-aos-delay="300" data-aos="fade-up" href="/contact">
      Send Message
      </Link>

      <div className="shapes shape-one"></div>
    </div>
  );
};

export default CallToAction;
