import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div>
      <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-dark text-white">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="12">
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Bass Store
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
