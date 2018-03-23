import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  display: inline-block;
  color: red;
  margin-right: 20px;
  margin-bottom: 20px;

  &.active {
    color: green;
    font-size: 1.2em;
  }
`;

export default NavItem;
