import React, { useState } from "react";


const FAQ = () => {
  const faqData = [
    {
      question: "1. What is the Agr plan?",
      answer:
        "Become a valued member of our AGR community today! Experience the power of our innovative system and unlock a world of exclusive benefits and opportunities.",
    },
    {
      question: "3. How Do You Make Money in Agr Scheme?",
      answer:
        "You earn commissions and retail prots from your personal sales. And you earn overrides and commissions from your team's sales. In essence, you are an independent contractor working as a salesperson for the Agr Company. Each compensation plan is different, but you normally get paid a certain percentage of your entire organization's sales.",
    },
    {
      question: "4. How to Become an MLM Business Expert?",
      answer:
        "In today's world of digitization, and online shift of culture from shopping to selling; studying to teaching and much more on the increase, the idea of Multi-level-Marketing (MLM) is important to survive and grow efficiently in this fast-paced business scenario. Business growth today is redefined by connections. The connectivity is reached by playing an important role in providing solutions to day-to-day business needs.",
    },
    {
      question: "3. How Do You Make Money in Agr Scheme?",
      answer:
        "You earn commissions and retail prots from your personal sales. And you earn overrides and commissions from your team's sales. In essence, you are an independent contractor working as a salesperson for the Agr Company. Each compensation plan is different, but you normally get paid a certain percentage of your entire organization's sales.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="w-full text-[1.8rem] md:text-[2.5rem] font-bold text-center py-10 uppercase tracking-wider bg-gray-200" style={{textShadow:'2px 2px 0px rgba(255, 255, 255, 0.7)'}}>Frequently <span className="text-[#057d45]">Ask Questions</span> </h1>
      
      <div className="w-[80%] pb-[50px] text-white mt-[60px]">
      <h2 className="text-[1.5rem] md:text-[2rem] font-semibold text-left py-5 text-black">How can we help you?</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-[#3E4095] rounded mb-4 ${index === expandedIndex ? "expanded" : ""}`}
          >
            <div
              className="p-4 cursor-pointer flex justify-between"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className="toggle-icon">
                {index === expandedIndex ? "-" : ">"}
              </span>
            </div>
            {index === expandedIndex && (
              <div className="faq-answer p-4 block bg-gradient-to-t from-[#3E4095] to-white text-black">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-image">
        <img src="assets/faq1.jpg" alt="" className=""/>
      </div>
    </div>
  );
};

export default FAQ;
