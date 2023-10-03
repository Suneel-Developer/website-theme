const Faq = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "How does the free trial work?",
      answer:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "faq-2",
      question: "How do you find different criteria in your process?",
      answer:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "faq-3",
      question: "What do you look for in a founding team?",
      answer:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "faq-4",
      question: "Do you recommend Pay as you go or Pre pay?",
      answer:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "faq-5",
      question: "What do I get for $0 with my plan?",
      answer:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <>
    <div class="title-style-ten text-center aos-init aos-animate" data-aos="fade-up">
      <div class="sc-title">FAQ</div>
      <h2 class="main-title font-recoleta fw-normal tx-dark">
      Questions &
      <span class="position-relative">
        Answers
        <img src="/images/shape/shape_132.svg" alt='logo' />
      </span>
      </h2>
    </div>
    <div class="bg-wrapper position-relative mt-80 lg-mt-40 aos-init aos-animate" data-aos="fade-up">
    <div className="accordion accordion-style-four " id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
            >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
      </>
  );
};

export default Faq;
