import React from "react";
import Certificates from "./Doc/Certificate.json";

const Certificate = () => {
  return (
    <>
      <div className="container certificate my-3" id="certificates">
        <h4 className="headingCert">Certificates/Awards</h4>
        <div className="row d-flex justify-content-center align-content-center">
          {Certificates.map((certi) => (
            <div
              key={certi.id}
              className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3" style={{paddingTop:'70px'}}
              data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "18rem",
                  border: "2px solid yellow",
                  boxShadow: "5px 5px 10px 6px rgba(101,175,10,0.5)",
                  borderRadius: "15px",padding:'10px', background:"green",
                }}
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={certi.imageSrc}
                    className="card-img-top"
                    alt={`Certificate ${certi.id}`}
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">{`Certificate ${certi.id}`}</h5> */}
                  <p className="card-text">{certi.title}</p>
                  <a
                    href={certi.documentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
