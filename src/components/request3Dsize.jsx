// import React, { useState, useMemo } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./request3Dsize.css"; // your styles

// const ALL_SIZES = [
//   {
//     id: 1,
//     label: "20 x 10 mm",
//     thumb: "/images/sizes/size1-thumb.png",
//     img: "/images/sizes/size1.png",
//   },
//   {
//     id: 2,
//     label: "25 x 12 mm",
//     thumb: "/images/sizes/size2-thumb.png",
//     img: "/images/sizes/size2.png",
//   },
//   {
//     id: 3,
//     label: "30 x 15 mm",
//     thumb: "/images/sizes/size3-thumb.png",
//     img: "/images/sizes/size3.png",
//   },
//   {
//     id: 4,
//     label: "35 x 18 mm",
//     thumb: "/images/sizes/size4-thumb.png",
//     img: "/images/sizes/size4.png",
//   },
//   {
//     id: 5,
//     label: "40 x 20 mm",
//     thumb: "/images/sizes/size5-thumb.png",
//     img: "/images/sizes/size5.png",
//   },
//   {
//     id: 6,
//     label: "45 x 22 mm",
//     thumb: "/images/sizes/size6-thumb.png",
//     img: "/images/sizes/size6.png",
//   },
//   {
//     id: 7,
//     label: "50 x 25 mm",
//     thumb: "/images/sizes/size7-thumb.png",
//     img: "/images/sizes/size7.png",
//   },
//   {
//     id: 8,
//     label: "55 x 28 mm",
//     thumb: "/images/sizes/size8-thumb.png",
//     img: "/images/sizes/size8.png",
//   },
//   {
//     id: 9,
//     label: "60 x 30 mm",
//     thumb: "/images/sizes/size9-thumb.png",
//     img: "/images/sizes/size9.png",
//   },
//   {
//     id: 10,
//     label: "65 x 32 mm",
//     thumb: "/images/sizes/size10-thumb.png",
//     img: "/images/sizes/size10.png",
//   },
// ];

// function chunkArray(arr, size) {
//   const out = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// }

// export default function RequestSize() {
//   const [activeStep, setActiveStep] = useState(0); // 0-based index for step
//   const slides = useMemo(() => chunkArray(ALL_SIZES, 5), []);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [selectedSizeId, setSelectedSizeId] = useState(ALL_SIZES[0].id);
//   const selectedSize =
//     ALL_SIZES.find((s) => s.id === selectedSizeId) || ALL_SIZES[0];

//   const widthOptions = [
//     "20 mm",
//     "25 mm",
//     "30 mm",
//     "35 mm",
//     "40 mm",
//     "45 mm",
//     "50 mm",
//   ];
//   const heightOptions = [
//     "10 mm",
//     "12 mm",
//     "15 mm",
//     "18 mm",
//     "20 mm",
//     "22 mm",
//     "25 mm",
//   ];
//   const radiusOptions = ["0 mm", "1 mm", "2 mm", "3 mm", "4 mm", "5 mm"];

//   const [width, setWidth] = useState(widthOptions[0]);
//   const [height, setHeight] = useState(heightOptions[0]);
//   const [radius, setRadius] = useState(radiusOptions[0]);
//   const [quantity, setQuantity] = useState("1");

//   const onSlide = (idx) => {
//     setActiveSlide(idx);
//     const firstOfSlide = slides[idx][0];
//     if (firstOfSlide) setSelectedSizeId(firstOfSlide.id);
//   };

//   const steps = ["Shape", "Size", "Material", "Extras", "Summary"];

//   return (
//     <div className="request-size container py-4">
//       {/* Title */}
//       <h2 className="request-title text-center mb-3">
//         Request your <span className="title-colored">3D PRINT</span>
//       </h2>

//       {/* Step navigation */}
//       <div className="d-flex justify-content-center align-items-center flex-wrap mb-4 step-container">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="d-flex align-items-center step-wrapper mx-2"
//             style={{ cursor: "pointer" }}
//             onClick={() => setActiveStep(index)}
//           >
//             <div
//               className={`step-circle ${
//                 activeStep === index ? "active-step" : "inactive-step"
//               }`}
//             >
//               {index + 1}
//             </div>
//             <span
//               className={`step-text ms-2 ${
//                 activeStep === index ? "text-black" : "text-secondary"
//               }`}
//             >
//               {step}
//             </span>
//             {index < steps.length - 1 && (
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 448 512"
//                 className="mx-3 text-secondary"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
//               </svg>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Show size carousel and controls only if activeStep === 1 (Size step) */}
//       {activeStep === 1 && (
//         <>
//           {/* Carousel of size thumbnails */}
//           <div className="size-carousel-wrapper mb-3">
//             <Carousel
//               activeIndex={activeSlide}
//               onSelect={onSlide}
//               indicators={false}
//               controls={true}
//               interval={null}
//             >
//               {slides.map((group, slideIdx) => (
//                 <Carousel.Item key={slideIdx}>
//                   <div className="d-flex justify-content-center flex-wrap gap-3 px-2 py-3">
//                     {group.map((size) => (
//                       <div
//                         key={size.id}
//                         className={`size-thumb-card text-center ${
//                           selectedSizeId === size.id ? "size-thumb-active" : ""
//                         }`}
//                         onClick={() => setSelectedSizeId(size.id)}
//                         role="button"
//                         tabIndex={0}
//                       >
//                         <img
//                           src={size.thumb}
//                           alt={size.label}
//                           className="img-fluid size-thumb-img"
//                         />
//                         <div className="size-thumb-label mt-2">{size.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>

//           {/* After carousel label */}
//           <div className="text-center mb-3">
//             <p className="mb-1 choose-custom-label">
//               Choose your own <strong>custom size:</strong>
//             </p>
//           </div>

//           {/* Custom size controls (labels above dropdown, left aligned) */}
//           <div className="row gy-3 mb-4">
//             <div className="col-12 col-md-4 text-start">
//               <label className="form-label control-label">Width</label>
//               <select
//                 className="form-select"
//                 value={width}
//                 onChange={(e) => setWidth(e.target.value)}
//               >
//                 {widthOptions.map((w) => (
//                   <option key={w} value={w}>
//                     {w}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="col-12 col-md-4 text-start">
//               <label className="form-label control-label">Height</label>
//               <select
//                 className="form-select"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//               >
//                 {heightOptions.map((h) => (
//                   <option key={h} value={h}>
//                     {h}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="col-12 col-md-4 text-start">
//               <label className="form-label control-label">Corner Radius</label>
//               <select
//                 className="form-select"
//                 value={radius}
//                 onChange={(e) => setRadius(e.target.value)}
//               >
//                 {radiusOptions.map((r) => (
//                   <option key={r} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Selected preview + labels */}
//           <div className="selected-preview-wrapper text-center mb-3">
//             <div className="selected-preview position-relative d-inline-block">
//               <img
//                 src={`/images/sizes/selectedsize.png`}
//                 alt={selectedSize.label}
//                 className="img-fluid selected-image"
//               />
//               {/* overlay labels on image */}
//               <div className="label-top-left">
//                 W: <span>{width}</span>
//               </div>
//               <div className="label-top-right">
//                 R: <span>{radius}</span>
//               </div>
//               <div className="label-bottom-center">
//                 H: <span>{height}</span>
//               </div>
//             </div>
//           </div>

//           {/* Enter quantity */}
//           <div className="text-center mb-4">
//             <label className="form-label d-block mb-2">Enter quantity</label>
//             <select
//               className="form-select w-auto d-inline-block"
//               style={{ minWidth: 110 }}
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             >
//               {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
//                 <option key={n} value={n}>
//                   {n}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </>
//       )}

//       {/* You can add other step content conditionally based on activeStep here */}

//       {/* Footer buttons */}
//       <div className="d-flex justify-content-between align-items-center">
//         <button
//           className="btn btn-outline-secondary px-4"
//           onClick={() => setActiveStep((s) => Math.max(s - 1, 0))}
//           disabled={activeStep === 0}
//         >
//           Back
//         </button>
//         <button
//           className="btn btn-next px-4"
//           style={{
//             background: "linear-gradient(90deg, #514F6E 0%, #9C98D4 100%)",
//             color: "#fff",
//             border: "none",
//           }}
//           onClick={() => setActiveStep((s) => Math.min(s + 1, steps.length - 1))}
//           disabled={activeStep === steps.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";
import "./request3Dsize.css"; // adjust if you want to use different CSS files

const steps = ["Shape", "Size", "Material", "Extras", "Summary"];

// Shapes data for Step 1
const shapes = [
  { name: "Rectangle", img: "/images/rectangle.png" },
  { name: "Square", img: "/images/square.png" },
  { name: "Circle", img: "/images/circle.png" },
  { name: "Diamond", img: "/images/diamond.png" },
  { name: "Oval", img: "/images/oval.png" },
];

// Sizes data for Step 2
const ALL_SIZES = [
  {
    id: 1,
    label: "20 x 10 mm",
    thumb: "/images/sizes/size1-thumb.png",
    img: "/images/sizes/size1.png",
  },
  {
    id: 2,
    label: "25 x 12 mm",
    thumb: "/images/sizes/size2-thumb.png",
    img: "/images/sizes/size2.png",
  },
  {
    id: 3,
    label: "30 x 15 mm",
    thumb: "/images/sizes/size3-thumb.png",
    img: "/images/sizes/size3.png",
  },
  {
    id: 4,
    label: "35 x 18 mm",
    thumb: "/images/sizes/size4-thumb.png",
    img: "/images/sizes/size4.png",
  },
  {
    id: 5,
    label: "40 x 20 mm",
    thumb: "/images/sizes/size5-thumb.png",
    img: "/images/sizes/size5.png",
  },
  {
    id: 6,
    label: "45 x 22 mm",
    thumb: "/images/sizes/size6-thumb.png",
    img: "/images/sizes/size6.png",
  },
  {
    id: 7,
    label: "50 x 25 mm",
    thumb: "/images/sizes/size7-thumb.png",
    img: "/images/sizes/size7.png",
  },
  {
    id: 8,
    label: "55 x 28 mm",
    thumb: "/images/sizes/size8-thumb.png",
    img: "/images/sizes/size8.png",
  },
  {
    id: 9,
    label: "60 x 30 mm",
    thumb: "/images/sizes/size9-thumb.png",
    img: "/images/sizes/size9.png",
  },
  {
    id: 10,
    label: "65 x 32 mm",
    thumb: "/images/sizes/size10-thumb.png",
    img: "/images/sizes/size10.png",
  },
];

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Request3DPrint() {
  // Step & state
  const [activeStep, setActiveStep] = useState(0);

  // Step 1 state: shape selection
  const [activeShape, setActiveShape] = useState(shapes[0].name);

  // Step 2 states: size selection
  const slides = useMemo(() => chunkArray(ALL_SIZES, 5), []);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSizeId, setSelectedSizeId] = useState(ALL_SIZES[0].id);
  const selectedSize =
    ALL_SIZES.find((s) => s.id === selectedSizeId) || ALL_SIZES[0];

  const widthOptions = [
    "20 mm",
    "25 mm",
    "30 mm",
    "35 mm",
    "40 mm",
    "45 mm",
    "50 mm",
  ];
  const heightOptions = [
    "10 mm",
    "12 mm",
    "15 mm",
    "18 mm",
    "20 mm",
    "22 mm",
    "25 mm",
  ];
  const radiusOptions = ["0 mm", "1 mm", "2 mm", "3 mm", "4 mm", "5 mm"];

  const [width, setWidth] = useState(widthOptions[0]);
  const [height, setHeight] = useState(heightOptions[0]);
  const [radius, setRadius] = useState(radiusOptions[0]);
  const [quantity, setQuantity] = useState("1");

  const onSlide = (idx) => {
    setActiveSlide(idx);
    const firstOfSlide = slides[idx][0];
    if (firstOfSlide) setSelectedSizeId(firstOfSlide.id);
  };

  // Render the step content dynamically
  const renderStepContent = () => {
    switch (activeStep) {
      case 0: // Shape step
        return (
          <>
            <p className="choose-shape-text mb-4 shape-text shape-text">
              Choose your shape:
            </p>
            <div className="shape-img row g-4 justify-content-center">
              {shapes.map((shape, index) => (
                <div
                  key={index}
                  className={`col-12 col-sm-6 ${
                    index < 3 ? "col-md-4 col-lg-3" : "col-md-6 col-lg-4"
                  }`}
                >
                  <div
                    className={`shape-card p-4 h-100 ${
                      activeShape === shape.name ? "shape-selected" : ""
                    }`}
                    onClick={() => setActiveShape(shape.name)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={shape.img}
                      alt={shape.name}
                      className="img-fluid mb-3 shape-image"
                    />
                    <p
                      className={`mb-0 shape-text ${
                        activeShape === shape.name
                          ? "text-colored"
                          : "text-secondary"
                      }`}
                    >
                      {shape.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 1: // Size step
        return (
          <>
            {/* Carousel of size thumbnails */}
            <div className="size-carousel-wrapper mb-3 size-choices">
              <Carousel
                activeIndex={activeSlide}
                onSelect={onSlide}
                indicators={false}
                controls={true}
                interval={null}
              >
                {slides.map((group, slideIdx) => (
                  <Carousel.Item key={slideIdx}>
                    <div className="d-flex justify-content-center flex-wrap gap-3 px-2 py-3">
                      {group.map((size) => (
                        <div
                          key={size.id}
                          className={`size-thumb-card text-center ${
                            selectedSizeId === size.id
                              ? "size-thumb-active"
                              : ""
                          }`}
                          onClick={() => setSelectedSizeId(size.id)}
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src={size.thumb}
                            alt={size.label}
                            className="img-fluid size-thumb-img"
                          />
                          <div className="size-thumb-label mt-2">
                            {size.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* After carousel label */}
            <div className="text-center mb-3">
              <p className="mb-1 choose-custom-label custom-paragraph">
                Choose your own <strong>custom size:</strong>
              </p>
            </div>

            {/* Custom size controls */}
            <div className="row gy-3 mb-4 size-controls">
              <div className="col-12 col-md-4 text-start">
                <label className="form-label control-label">Width</label>
                <select
                  className="form-select"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                >
                  {widthOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-md-4 text-start">
                <label className="form-label control-label">Height</label>
                <select
                  className="form-select"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                >
                  {heightOptions.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-md-4 text-start">
                <label className="form-label control-label">
                  Corner Radius
                </label>
                <select
                  className="form-select"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                >
                  {radiusOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected preview + labels */}
            <div className="selected-preview-wrapper text-center mb-3 finalized-img">
              <div className="selected-preview position-relative d-inline-block">
                <img
                  src={`/images/sizes/selectedsize.png`}
                  alt={selectedSize.label}
                  className="img-fluid selected-image"
                />
                <div className="label-top-left">
                  W: <span>{width}</span>
                </div>
                <div className="label-top-right">
                  R: <span>{radius}</span>
                </div>
                <div className="label-bottom-center">
                  H: <span>{height}</span>
                </div>
              </div>
            </div>

            {/* Enter quantity */}
            <div className="text-center mb-4">
              <label className="form-label d-block mb-2">Enter quantity</label>
              <select
                className="form-select w-auto d-inline-block"
                style={{ minWidth: 110 }}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </>
        );

      case 2:
      case 3:
      case 4:
        return (
          <div className="text-center py-5">
            <h3>{steps[activeStep]} Step Content Here</h3>
            <p>This section is under construction.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="request-title text-center mb-3">
        Request your <span className="title-colored">3D PRINT</span>
      </h2>

      {/* Step navigation */}
      <div className="d-flex justify-content-center align-items-center flex-wrap mb-4 step-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className="d-flex align-items-center step-wrapper mx-2"
            onClick={() => setActiveStep(index)}
            style={{ cursor: "pointer" }}
          >
            <div
              className={`step-circle ${
                activeStep === index ? "active-step" : "inactive-step"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`step-text ms-2 ${
                activeStep === index ? "text-black" : "text-secondary"
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <FaArrowRight className="mx-3 text-secondary" />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {renderStepContent()}

    
      {/* Buttons container */}
      <div
        className="d-flex justify-content-between align-items-center mt-5"
        style={{ gap: "10px" }}
      >
        {/* Back Button */}
        <button
          className="btn btn-outline-secondary"
          style={{
            width: 214,
            height: 50,
            paddingTop: 12,
            paddingRight: 32,
            paddingBottom: 13,
            paddingLeft: 32,
            borderRadius: 8,
            opacity: 1,
            border: "1px solid #ccc",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => setActiveStep((s) => Math.max(s - 1, 0))}
          disabled={activeStep === 0}
        >
          Back
        </button>

        {/* Next Button */}
        <button
          className="btn"
          style={{
            width: 214,
            height: 50,
            paddingTop: 12,
            paddingRight: 32,
            paddingBottom: 13,
            paddingLeft: 32,
            borderRadius: 8,
            opacity: 1,
            background: "linear-gradient(90deg, #514F6E 0%, #9C98D4 100%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() =>
            setActiveStep((s) => Math.min(s + 1, steps.length - 1))
          }
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
