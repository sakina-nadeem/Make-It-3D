import React from "react";
import Navbar from "../components/navbar";
import SecondHome from "../components/secondhome";
import ReviewSection from "../components/reviewsection";
import IdeaCard from "../components/ideacard";
import Footer from "../components/footer";
import Request3DPrint from "../components/request3Dprint";

function SecondPage() {
  return (
    <>
      <Navbar variant="image" />
      <SecondHome />
      <Request3DPrint />
      <ReviewSection />
      <IdeaCard />
      <Footer />
    </>
  );
}

export default SecondPage;
