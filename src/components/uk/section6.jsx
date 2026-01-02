import { useState } from 'react';

const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "Are the classes live or recorded?",
      answer: "All classes are live and conducted one-to-one with a qualified teacher.",
      highlight: ["live", "one-to-one"]
    },
    {
      question: "Do I need prior knowledge?",
      answer: "No, beginners are welcome. Our teachers are trained to work with students at all levels, from complete beginners to advanced learners.",
      highlight: ["beginners"]
    },
    {
      question: "Can kids join the classes?",
      answer: "Yes, we offer structured classes for kids and adults. Our curriculum is tailored to different age groups to ensure effective learning.",
      highlight: ["structured classes for kids and adults"]
    },
    {
      question: "How do I start?",
      answer: "Simply fill out the form to start your free trial class. We'll match you with a suitable teacher and schedule your first lesson.",
      highlight: ["free trial class"]
    }
  ];

  const handleFaqClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const highlightText = (text, highlights) => {
    if (!highlights) return text;
    
    let result = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      result = result.replace(regex, '<span class="highlight">$1</span>');
    });
    return { __html: result };
  };

  return (
    <section className="faq-section py-10 bg-[#f5f4f4]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
           <h1 className="text-3xl md:text-4xl font-bold">
       <span className="text-black">Frequently </span>
       <span className="text-[#1F8AA4]"> Asked Questions</span>
          </h1>
        </div>

        {/* FAQ Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                activeIndex === index ? 'bg-[#fefdfc]' : ''
              }`}
            >
              <div 
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-white-50 transition-colors duration-200"
                onClick={() => handleFaqClick(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] pr-4">
                  {item.question}
                </h3>
                <div className={`text-[#acacab] text-2xl font-light transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p 
                    className="text-[#555] text-base md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={highlightText(item.answer, item.highlight)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .highlight {
          color: #d4a762;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .faq-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Section6;