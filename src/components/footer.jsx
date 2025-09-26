import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.svg";  // Adjust the relative path based on your folder structure

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white pt-5 pb-3">
        <div className="container">
          <div className="row gx-5">
            {/* Left Column */}
            <div className="col-md-4 mb-4 mb-md-0">
              <img
                src={logo}  // Use imported logo here
                alt="Logo"
                className="mb-3"
                style={{ maxWidth: "150px" }}
              />
              <ul className="list-unstyled">
                <li className="mb-2">Terms and Conditions</li>
                <li className="mb-2">Privacy Policy</li>
                <li>Stay in touch</li>
              </ul>
            </div>

            {/* Center Column */}
            <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column">
              <ul className="list-unstyled mb-3">
                {/* You can add center column links here if needed */}
              </ul>
              <div className="mb-2">Quote</div>
              <div className="mb-2">Store</div>
              <div className="mb-2">Delivery</div>
              <div>About Us</div>
            </div>

            {/* Right Column */}
            <div className="col-md-4 d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="me-2" />
                <span>+1 234 567 890</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-2" />
                <span>email@example.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-2" />
                <span>1234 Random St, City, Country</span>
              </div>
              <div className="d-flex gap-3 mt-auto">
                <a href="#!" className="text-white fs-4"><FaWhatsapp /></a>
                <a href="#!" className="text-white fs-4"><FaFacebookF /></a>
                <a href="#!" className="text-white fs-4"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom copyright bar */}
      <div className="bg-dark text-white text-center py-3" style={{ fontSize: "0.9rem" }}>
        © 2025 3D PRINTS
      </div>
    </>
  );
}
