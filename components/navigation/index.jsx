import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const NavBar = props => {
  const { classes, style } = props;
  return (
    <div className={classes.root}>
      <AppBar elevation={0} style={style}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Manoranjan
          </Typography>
          <Button color="inherit" className={classes.button}>
            Movies
          </Button>
          <Button color="inherit" className={classes.button}>
            Tv
          </Button>
          <Button color="inherit" className={classes.button}>
            Popular
          </Button>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
