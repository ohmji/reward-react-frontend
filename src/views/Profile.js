import React from 'react';
import { MDBContainer, MDBRow, MDBCol  } from "mdbreact";
import FooterProfile from '../Components/FooterProfile'


class Profile extends React.Component {
 

  render() {
    return (
        <div>
           <MDBContainer>
        <MDBRow>
            <MDBCol size="6" md="4">Name</MDBCol>
            <MDBCol size="12" md="8">.col-12 .col-md-8</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size="6" md="4">Gender</MDBCol>
            <MDBCol size="12" md="8">.col-12 .col-md-8</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size="6" md="4">Date of Birth</MDBCol>
            <MDBCol size="12" md="8">.col-12 .col-md-8</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size="6" md="4">Call</MDBCol>
            <MDBCol size="12" md="8">.col-12 .col-md-8</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size="6" md="4">Email</MDBCol>
            <MDBCol size="12" md="8">.col-12 .col-md-8</MDBCol>
        </MDBRow>  
           

       
         <FooterProfile></FooterProfile>
      </MDBContainer>
        </div>
    );
  }
}



export default Profile ;