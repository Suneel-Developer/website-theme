const leadItems = [
  { icon: "/images/icon/icon_94.svg", text: "Get community support" },
  { icon: "/images/icon/icon_95.svg", text: "Go crowdfunding to raise money" },
  { icon: "/images/icon/icon_96.svg", text: "Launch!" },
];

const Leads = () => {
  return (
    <>
    <div className="container">
    <div className=" row">
    <div className="col-xl-8 col-lg-9 m-auto">
      <div class="title-style-ten text-center pb-40 lg-pb-20 aos-init aos-animate" data-aos="fade-up">
        <h2 class="main-title font-recoleta fw-normal tx-dark">
        The {' '}
          <span class="position-relative">
          way {' '}
            <img src="/images/shape/shape_122.svg" alt="logo" />
          </span>
          forward
        </h2>
        <p class="fs-20 mt-20">I’m working with experts in the utility sector to bring Leccy to life!</p>
      </div>
    </div>
    </div>
    <div className="row">
      {leadItems.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div
            className="card-style-fourteen text-center mt-30"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            >
            <div className="icon">
              <img
                src={item.icon}
                alt="icon shape"
                className="lazy-img m-auto"
              />
            </div>
            <p className="text-uppercase fs-18 mt-60 lg-mt-30">{item.text}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default Leads;
