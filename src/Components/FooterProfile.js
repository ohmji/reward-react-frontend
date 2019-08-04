import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter , MDBNavLink,MDBIcon } from "mdbreact";





const FooterProfile = () => {
  return (
    <div>
    <MDBFooter color="primary-color-dark" className="font-small pt-3 mt-3">
      <MDBContainer fluid className="text-center text-md-center">
        
        <MDBRow>
         
          <MDBCol size="4" md="4">
          
                    <MDBNavLink to="collectpoint">
                    <MDBIcon icon="envelope" size="2x" />
              <br />
                        รายการโปรด</MDBNavLink>
          </MDBCol>
          <MDBCol  size="4" md="4">
          
          <MDBNavLink to="reward">
          <MDBIcon icon="star" size="2x" />
              <br />
              
              ประวัติการแลก</MDBNavLink>
         
            </MDBCol>
          <MDBCol  size="4" md="4">
          
                  <MDBNavLink to="luckydraw">
                  <MDBIcon icon="heart" size="2x" />
              <br />
                      ประวัติการสะสม</MDBNavLink>
          </MDBCol>
       
        </MDBRow>
      </MDBContainer>
    
    </MDBFooter>
    
    </div>
  );
}

export default FooterProfile;