import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";

const DefaultFooter = () => {
  return (
    <>
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/logo_06.png" alt="brand" />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            <div className="col-lg-4 mb-30 form-widget">
              <h5 className="footer-title tx-dark fw-normal">Newslettert</h5>
              <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
              <NewsLetter />
              <div className="fs-14 mt-10 text-white opacity-50">
                We only send interesting and relevant emails.
              </div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <div className="shapes shape-one"></div>
      <imgz
        src="/images/shape/shape_134.svg"
        alt="shape"
        className="lazy-img shapes shape-two"
      />

      </>
  );
};

export default DefaultFooter;
