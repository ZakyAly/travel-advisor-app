import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Explor new places
        </Typography>
        {/* <Autocomplete> */}
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search ... "
            classes={{ root: classes.iputRoot, input: classes.inputInput }}
          />
        </div>
        {/* </Autocomplete> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
