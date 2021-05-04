import React, { Component } from 'react'
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavLink,
    NavItem

} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Cart - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                        <Badge color="warning" onClick={()=>this.props.removeFromCart(cartItem.product)}>Sil</Badge>
                        {cartItem.product.productName}
                        <Badge color="success"> {cartItem.quantity}</Badge>
                    </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                    Reset
            </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        )}

        renderEmpty(){
            return(<NavItem>
                <NavLink>
                    EmptyCart
                </NavLink>
            </NavItem>)
        }
    
    render() {
        return (
            <div>
            {this.props.cart.length>0 ? this.renderSummary():this.renderEmpty()}
            </div>
        )
    }
}
