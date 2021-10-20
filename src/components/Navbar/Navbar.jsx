import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  //const location = useLocation();

  //const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  //const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='commerce.js'
              height='25px'
              className={classes.image}
            />{' '}
            JSleaders
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              Reclamation
            </IconButton>
          </div>
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
