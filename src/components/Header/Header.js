import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Header = () => (
	<Navbar color="dark" dark expand="md">
		<Container>
			<NavbarBrand tag={RouterNavLink} to="/" exact>Turtle Pizza Admin</NavbarBrand>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/" exact>Dishes</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/orders">Order</NavLink>
				</NavItem>
			</Nav>
		</Container>
	</Navbar>
);


export default Header;