import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PopularProduct({ products = [] }) {
  const navigate = useNavigate();
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const popularProducts = products.slice(0, 3);

  const handleAddToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/api/cart", {
        productId: product._id,
        quantity: 1,
      });
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add product to cart", error);
      alert("Failed to add to cart. Please try again.");
    }
  };

  // Function to get the correct image URL
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return "http://localhost:5000/uploads/default-product.png";
    
    if (imageUrl.startsWith("http")) {
      return imageUrl;
    }
    
    if (imageUrl.startsWith("/uploads")) {
      return `http://localhost:5000${imageUrl}`;
    }
    
    return `http://localhost:5000/uploads/${imageUrl}`;
  };

  // Toggle description expansion
  const toggleDescription = (productId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <section
      style={{
        backgroundColor: "white",
        padding: "60px 20px",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: "Staatliches, sans-serif",
          lineHeight: "1.2",
          fontSize: "72px",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: "10px",
          userSelect: "none",
        }}
      >
        <span style={{ color: "black" }}>POPULAR</span>{" "}
        <span style={{ color: "#514F6E" }}>PRODUCT</span>
      </h2>

      {/* Paragraph */}
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto 50px auto",
          lineHeight: "1.5",
          color: "#B6B6B3",
          userSelect: "none",
        }}
      >
        Our{" "}
        <span style={{ color: "#514F6E", fontWeight: "600" }}>
          best-selling
        </span>{" "}
        3D creations loved by our customers
      </p>

      {/* Product Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.7rem",
        }}
      >
        {popularProducts.map((prod) => (
          <div
            key={prod._id}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              userSelect: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              height: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(81, 79, 110, 0.2)";
              e.currentTarget.style.borderColor = "#514F6E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              e.currentTarget.style.borderColor = "#ddd";
            }}
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div
              style={{
                width: "100%",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={getImageUrl(prod.imageUrl)}
                alt={prod.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "15px",
                }}
                onError={(e) => {
                  e.target.src = "http://localhost:5000/uploads/default-product.png";
                }}
              />
            </div>

            {/* Product Info */}
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "1.4rem",
                  marginBottom: "12px",
                  color: "black",
                  lineHeight: "1.3",
                  minHeight: "3.6rem",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {prod.title}
              </h3>

              {/* Categories - Fixed to show max 4 per row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "12px",
                  userSelect: "none",
                  maxHeight: "60px",
                  overflow: "hidden",
                }}
              >
                {(prod.categories || []).slice(0, 8).map((cat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "12px",
                      cursor: "default",
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      userSelect: "none",
                      backgroundColor: "#f0f0f0",
                      color: "#514F6E",
                      border: "1px solid #d3d3d3",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "120px",
                    }}
                    title={cat}
                  >
                    {cat}
                  </div>
                ))}
              </div>

              {/* Description with Read More functionality */}
              <div style={{ marginBottom: "15px", flexGrow: 1 }}>
                <p
                  style={{
                    color: "#777777",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    marginBottom: "8px",
                    display: "-webkit-box",
                    WebkitLineClamp: expandedDescriptions[prod._id] ? "unset" : "3",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "60px",
                  }}
                >
                  {prod.description}
                </p>
                {prod.description && prod.description.length > 150 && (
                  <button
                    onClick={() => toggleDescription(prod._id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#514F6E",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      padding: 0,
                      textDecoration: "underline",
                    }}
                  >
                    {expandedDescriptions[prod._id] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>

              {/* Price */}
              <div
                style={{
                  marginBottom: "15px",
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>${prod.price}</span>
                {prod.originalPrice && prod.originalPrice > prod.price && (
                  <span
                    style={{
                      color: "#999999",
                      fontWeight: "400",
                      fontSize: "0.85rem",
                      textDecoration: "line-through",
                      userSelect: "none",
                    }}
                  >
                    ${prod.originalPrice}
                  </span>
                )}
              </div>

              {/* Buy Now Button */}
              <button
                style={{
                  background: "linear-gradient(90deg, #514F6E 0%, #9C98D4 100%)",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  userSelect: "none",
                  width: "100%",
                  transition: "background-color 0.3s ease",
                  marginTop: "auto",
                }}
                onClick={() => handleAddToCart(prod)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "linear-gradient(90deg, #3a3551 0%, #7f7ac2 100%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "linear-gradient(90deg, #514F6E 0%, #9C98D4 100%)")
                }
              >
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  style={{ marginLeft: "4px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More button */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <button
          style={{
            background: "white",
            color: "#514F6E",
            border: "1px solid #514F6E",
            padding: "12px 36px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "1.1rem",
            cursor: "pointer",
            userSelect: "none",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onClick={() => navigate("/products")}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#514F6E";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "#514F6E";
          }}
        >
          See More
        </button>
      </div>
    </section>
  );
}

export default PopularProduct;