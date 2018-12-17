/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navigation';

const Movies = props => {
  const { pageContext } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My Movies page</title>
      </Head>
      <NavBar style={pageContext.theme.palette.transparentLight} />
    </React.Fragment>
  );
};

export default Movies;
