import React, {Component, Fragment} from 'react';
import {NavLink as RouterNavLink} from "react-router-dom";
import { Route, Switch } from "react-router";
import Dishes from "./containers/Dishes/Dishes";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RouterNavLink} to="/" exact>Turtle Pizza Admin</NavbarBrand>
                <NavbarToggler/>
                <Collapse isOpen navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/" exact>Dishes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/orders">Order</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container>
        <Switch>
            <Route path="/" exact component={ Dishes } />
            <Route path="/orders" component={ Orders } />
            <Route render={ () => <h1>Hot found</h1> } />
        </Switch>
            </Container>
        </Fragment>
    );
  }
}

export default App;
