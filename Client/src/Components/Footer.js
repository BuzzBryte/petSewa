import React from 'react';
import { MDBRow, MDBCol, MDBFooter, MDBIcon, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
      <MDBFooter style={{ backgroundColor: '#606b63' }} className="text-center text-lg-start text-white" id="contact">
        <section className="footer-position">
          <MDBContainer className="text-center text-md-start">
            <MDBRow className="">
              <MDBCol sm="8" md="8" lg="5" xl="4" className="mx-auto mb-4">
                <h6 className="logo-footer text-uppercase mt-5 mb-4">Pet Sewa</h6>
                <p>
                  If you have any question, please contact us at
                  <br />
                  <span>arunkarki223344@gmail.com</span>
                </p>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  Australia
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> (+61)-1011-00-111-1011
                </p>
              </MDBCol>

              <MDBCol sm="4" md="4" lg="2" xl="2" className="contact-hover text-secondary mx-auto mb-4">
                <h6 className="text-light fw-bold mb-4 mt-5">Corporate</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
              </MDBCol>

             

              <MDBCol sm="6" md="4" lg="2" xl="2" className="contact-hover text-secondary mx-auto mb-md-0 mb-4">
                <h6 className="text-light fw-bold mb-4 mt-5">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Grooming
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Positive Dog Training
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Veterinary Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Petco Insurance
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="payment d-flex justify-content-between align-items-center flex-wrap pe-5 me-5 ps-5 ms-5 pb-4">
            <p className="text-muted">© 2024 petSewa. All rights reserved.</p>
            
          </div>
        </section>
      </MDBFooter>
    </>
  );
}
