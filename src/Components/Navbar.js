
 import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
MDBMask, MDBView

} from "mdbreact";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="primary-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">REWARD</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem >
            <MDBView hover zoom>
              <MDBNavLink to="reward">Reward</MDBNavLink>
             </MDBView>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="collectpoint">Collect Point</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="luckydraw">Lucky Draw</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="profile">Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;