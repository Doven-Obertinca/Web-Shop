import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import logo from "../../../assets/cherry-575547_1280.png";
import useStyles from './styles'


function Navbar() {
  const classes = useStyles()
  return (
   <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography variant='h6' className={classes.title} color="inherit">
                <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                My Shop
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton aria-label="Show cart items" color="iherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart />
                </Badge>

              </IconButton>
            </div>
          </Toolbar>
        
        </AppBar> 
   </>
  )
}

export default Navbar