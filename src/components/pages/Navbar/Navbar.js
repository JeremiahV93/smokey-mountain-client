import React from 'react';

import PropTypes from 'prop-types';

import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Logout from '../Logout/Logout';

class TheNavbar extends React.Component {
static propTypes = {
  authed: PropTypes.bool,
}

state = {
  isOpen: false,
}

toggle = () => {
  const { isOpen } = this.state;
  this.setState({ isOpen: !isOpen });
}

render() {
  const { isOpen } = this.state;
  const { authed } = this.props;

  const buildNavbar = () => {
    if (authed) {
      return (
             <Nav className="mr-auto" navbar>
                <NavItem>
                     <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
                 </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to='/articles'>Articles</NavLink>
                 </NavItem>
                <NavItem> <NavLink tag={RRNavLink} to='/categories'>Categories</NavLink>
                </NavItem>
                <NavItem>
                 <NavLink tag={RRNavLink} to='/profile'>Profile</NavLink>
                </NavItem>
                <NavItem>
                <Logout/>
             </NavItem>
             </Nav>
      );
    }

    return (
            <Nav>
                <NavItem>
                    <NavLink to='/Auth'>Login</NavLink>
                </NavItem>
            </Nav>
    );
  };
  return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Rare</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
                {buildNavbar()}
            </Collapse>
        </Navbar>
  );
}
}

export default TheNavbar;
