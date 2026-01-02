'use client'
import React, { useRef } from "react";
import RegesterHero from "./Hero";
import RegesterForm from "./Form";
import RegesterCta from "./Cta";
import TestimonialsSection from "./TestimonialsSection";
import ParentSafetySection from "./ParentSafetySection";
import TrialClassSection from "./TrialClassSection";
import WhyTakeTrial from "./WhyTakeTrial";
import FreeTrialSteps from "./FreeTrialSteps";
function MainRegister() {
  const formRef = useRef(null);

  const handleScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">  
     <RegesterHero onGetStartedClick={handleScroll}/> 
      <WhyTakeTrial/>
      <FreeTrialSteps/>
     <RegesterForm scrollRef={formRef}/> 
     <TrialClassSection/>
     <ParentSafetySection onGetStartedClick={handleScroll}/>
     <TestimonialsSection />
     <RegesterCta onGetStartedClick={handleScroll}/>  
    </div>
  );
}

export default MainRegister;