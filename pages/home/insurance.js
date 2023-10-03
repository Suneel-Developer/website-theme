import Link from "next/link";
import Seo from "../../components/common/Seo";
import FooterContent from "../../components/footer/DefaultFooter";
import DefaulHeader from "../../components/header/DefaulHeader";
import CallToAction from "../../components/portfolio/CallToAction";
import Block from "../../components/home-page/home-1/Block";
import Hero from "../../components/home-page/home-13/hero/index";
import Leads from "../../components/home-page/home-13/Leads";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-13/Testimonial";
import WhyChoose from "../../components/home-page/home-13/FeaturesBlock";
import Feedback from "../../components/home-page/home-13/Feedback";
import Feature from "../../components/home-page/home-13/Feature";
import Counter from "../../components/home-page/home-13/Counter";
import FAQ from "../../components/home-page/home-13/Faq";
import SuccessStory from "../../components/home-page/home-13/SuccessStory";

const Insurance = () => {
  return (
    <>
      <Seo pageTitle="Insurance" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <Hero />
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <div className="feedback-section-eight position-relative pt-200 pb-30 lg-pt-120 aos-init aos-animate" >
        <div className="container">
            <Feedback />
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      <div className="fancy-feature-thirty position-relative mt-100 pb-140 lg-mt-40 lg-pb-120 md-p0">
          <Feature/>        
      </div>
        <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
            <Leads />
            <img src="/images/shape/shape_125.svg" alt='logo' class="lazy-img shapes shape-two"/>
        </div>
      {/* /.fancy-feature-thirtyFive */}
      
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div class="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div class="container">
          <div class="row">
            <WhyChoose/>
        <div class="wrapper mt-90 lg-mt-30">
              <Counter/>
        </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-thirtySeven */}
      {/*=====================================================
				Success Story
			=====================================================
			*/}
      <div class="feedback-section-nine position-relative mt-200 lg-mt-120">
        <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 ms-lg-auto aos-init aos-animate">
            <div class="title-style-ten">
              <div class="sc-title">SUCCESS STORIES</div>
              <h2 class="main-title font-recoleta fw-normal tx-dark">
              See success stories  of our customers.
              </h2>
            </div>
          </div>
        </div>
        </div>
        <SuccessStory/>
      </div>

      {/*=====================================================
				Testimonial
			=====================================================
			*/}
        <div class="feedback-section-ten position-relative pt-200 lg-pt-150">
          <div class="container">
            <div class="position-relative">
            <Testimonial/>
            </div>
          </div>
          <img src="/images/shape/shape_130.svg" alt='logo' class="lazy-img shapes shape-one"/>
          <img src="/images/shape/shape_131.svg" alt='logo' class="lazy-img shapes shape-two" />
        </div>
      {/*=====================================================
				FAQ
			=====================================================
			*/}
      <div class="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div class="container">
            <FAQ/>
        </div>
      </div>
    
      {/*=====================================================
				Call TO Action
			=====================================================
			*/}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <CallToAction />
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}

     {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
              <FooterContent />
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
