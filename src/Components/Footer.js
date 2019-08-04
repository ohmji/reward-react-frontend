import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter , MDBNavLink,MDBIcon } from "mdbreact";
import './footer.css'




const FooterPage = () => {
  return (
    <div className="footer">
    <MDBFooter color="primary-color-dark" className="font-small pt-3 mt-3">
      <MDBContainer fluid className="text-center text-md-center">
        
        <MDBRow>
         
          <MDBCol size="3" md="3">
          
                    <MDBNavLink to="collectpoint">
                    <MDBIcon icon="envelope" size="2x" />
              <br />
                        Collect Point</MDBNavLink>
          </MDBCol>
          <MDBCol  size="3" md="3">
          
          <MDBNavLink to="reward">
          <MDBIcon icon="star" size="2x" />
              <br />
              
              Reward</MDBNavLink>
         
            </MDBCol>
          <MDBCol  size="3" md="3">
          
                  <MDBNavLink to="luckydraw">
                  <MDBIcon icon="heart" size="2x" />
              <br />
                      Lucky Draw</MDBNavLink>
          </MDBCol>
          <MDBCol  size="3" md="3">
          
          <MDBNavLink to="profile">
          <MDBIcon icon="user" size="2x" />
              <br />
              Profile</MDBNavLink>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    
    </MDBFooter>
    
    </div>
  );
}

export default FooterPage;