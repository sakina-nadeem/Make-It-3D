import React from "react";
import { FaPrint, FaBoxes, FaStopwatch } from "react-icons/fa";
import "./cardsection.css";

function CardsSection() {
  return (
    <div className=" container-fluid px-0">
      <div className=" mini-cards row g-3">
        {/* 1st Card */}
        <div
          className="col-md-3 d-flex flex-column justify-content-center px-4 py-4 hover-glow"
          style={{
            backgroundColor: "#514F6E",
            borderRadius: "8px",
            color: "white",
            border: "1px solid transparent",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <div className="cards-distance" style={{ position: "relative", zIndex: 2 }}>
            <div className="d-flex align-items-center mb-2">
              <FaPrint size={30} className="me-3" />
              <h5 className="mb-0">High-Precision Printing</h5>
            </div>
            <p style={{ marginLeft: "38px" }}>
              We use state-of-the-art printers to deliver incredibly detailed and
              accurate results.
            </p>
          </div>
        </div>

        {/* 2nd Card */}
        <div
          className="col-md-3 d-flex flex-column justify-content-center px-4 py-4 hover-glow"
          style={{
            backgroundColor: "#B6B6B3",
            borderRadius: "8px",
            color: "black",
            border: "1px solid transparent",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="d-flex align-items-center mb-2">
              <FaBoxes size={30} className="me-3" />
              <h5 className="mb-0">Wide Range of Materials</h5>
            </div>
            <p style={{ marginLeft: "38px" }}>
              From PLA and PETG to flexible and industrial-grade resins.
            </p>
          </div>
        </div>

        {/* 3rd Card */}
        <div
          className="col-md-3 d-flex flex-column justify-content-center px-4 py-4 hover-glow"
          style={{
            backgroundColor: "#514F6E",
            borderRadius: "8px",
            color: "white",
            border: "1px solid transparent",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="d-flex align-items-center mb-2">
              <FaStopwatch size={30} className="me-3" />
              <h5 className="mb-0">Rapid Turnaround</h5>
            </div>
            <p style={{ marginLeft: "38px" }}>
              Quick delivery without sacrificing quality.
            </p>
          </div>
        </div>

        {/* 4th Card */}
        <div
          className="col-md-3 d-flex justify-content-center align-items-center px-4 py-4 hover-glow"
          style={{
            backgroundColor: "#B6B6B3",
            borderRadius: "8px",
            border: "1px solid transparent",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <button
            className="btn"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              fontWeight: "600",
              minWidth: "100%",
              position: "relative",
              zIndex: 2,
              border: "none",
            }}
          >
            Book Meeting
          </button>
        </div>
      </div>

      {/* Hover glow CSS */}
      <style>{`
        .hover-glow {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s ease;
        }

        .hover-glow::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 10px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
          box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.6);
          z-index: 1;
        }

        .hover-glow:hover {
          transform: translateY(-6px);
          border-color: #fff;
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.25);
        }

        .hover-glow:hover::before {
          opacity: 1;
          animation: pulseGlow 2.5s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.6);
          }
          50% {
            box-shadow: 0 0 25px 6px rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
    </div>
  );
}

export default CardsSection;
