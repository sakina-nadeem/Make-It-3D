// HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import HomeCarousel from "../components/home";
import CardsSection from "../components/cardsection";
import WhyChooseSection from "../components/whychoosesection";
import PopularProduct from "../components/popularproducts";
import ReviewSection from "../components/reviewsection";
import IdeaCard from "../components/ideacard";
import Footer from "../components/footer";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data.products || response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar variant="transparent" />
      <HomeCarousel />
      <CardsSection />
      <WhyChooseSection />
      {/* Pass products prop here */}
      <PopularProduct products={products} />
      <ReviewSection />
      <IdeaCard />
      <Footer />
    </>
  );
}

export default HomePage;