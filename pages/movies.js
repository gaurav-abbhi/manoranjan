/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import _ from 'lodash';
import NavBar from '../components/navigation';
import { fetchMovie } from '../src/actions/catalog';
import PosterCard from '../components/PosterCard';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

class Movies extends Component {
   componentDidMount() {
    const { dispatch } = this.props;
     dispatch(fetchMovie());
  }

  handleShowMore() {
    const { dispatch, movie } = this.props;
    dispatch(fetchMovie(movie.activePage + 1));
  }

  render() {
    const { pageContext, movie } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>My Index page</title>
        </Head>
        <NavBar style={pageContext.theme.palette.transparentLight} />
        <div>
          {movie
            ? _.map(movie.results, (value, key) => (
              <PosterCard
                key={key}
                name={value.title}
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

export default withStyles(styles)(connect(mapStateToProps)(Movies));
