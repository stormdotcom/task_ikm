import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { House } from '@mui/icons-material';
import classes from './Main.module.css';
const NavbarWrapper = styled.nav`
  background-color: #353b41
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const AccountWrapper = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 8px 0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: visibility 0s, opacity 0.2s ease-in-out;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Navbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <NavbarWrapper>
            <Grid >
                <Grid>
                    <House />
                </Grid>
                <Grid>
                    <Typography> Grave Sites Management</Typography>
                </Grid>
            </Grid>

            <MenuWrapper>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuWrapper>
            <AccountWrapper>
                <Avatar src="https://placeimg.com/100/100/people" alt="avatar" onClick={handleDropdownClick} />
                <DropdownMenu visible={isDropdownVisible}>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
            </AccountWrapper>
        </NavbarWrapper>
    );
};

export default Navbar;
