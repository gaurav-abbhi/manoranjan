/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import _ from 'lodash';
import NavBar from '../components/navigation';
import { fetchTv } from '../src/actions/catalog';
import PosterCard from '../components/PosterCard';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

class Tv extends Component {
   componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTv());
  }

  handleShowMore() {
    const { dispatch, tv } = this.props;
    dispatch(fetchTv(tv.activePage + 1));
  }

  render() {
    const { pageContext, tv } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>My Index page</title>
        </Head>
        <NavBar style={pageContext.theme.palette.transparentLight} />
        <div>
          {tv
            ? _.map(tv.results, (value, key) => (
              <PosterCard
                key={key}
                name={value.name}
                image={value.poster_path}
                overview={value.overview}
              />
            ))
            : 'Loading'}
          <button type="button" onClick={() => this.handleShowMore()}>
            Show More
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { catalog } = state;
  return catalog;
};

export default withStyles(styles)(connect(mapStateToProps)(Tv));
