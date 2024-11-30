import React from "react";
import Certificates from "./Doc/Certificate.json";


const Certificate = () => {
  return (
    <div className="container certificate">
      <h3>Certificates/Awards</h3>
      {Certificates.map((certi, index) => (
        <div className="item" key={certi.id}>
          <div className="item-details">
            <img src={certi.imageSrc} alt={`Certificate ${index + 1}`} />
            <h3>{`Certificate ${index + 1}`}</h3>
            <button
              className="view-button"
              onClick={() => window.open(certi.documentLink, "_blank")}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
