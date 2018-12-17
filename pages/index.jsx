/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../components/navigation';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

const Index = props => {
  const { pageContext } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My Index page</title>
      </Head>
      <NavBar style={pageContext.theme.palette.transparentLight} />
    </React.Fragment>
  );
};

export default withStyles(styles)(Index);
