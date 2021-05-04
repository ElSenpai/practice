import React, { Component } from 'react'
import {
  
  Navbar,
  
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';
export default class Navi extends Component {
  render() {
    return (
      <div>
       
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
      
      </Navbar>
      </div>
    )
  }
}
