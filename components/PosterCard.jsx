import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { image as tmdbImage } from '../src/services/tmdb';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 300
  }
});

const PosterCard = props => {
  const { classes, image, name, overview } = props;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardMedia className={classes.cover} image={tmdbImage(image)} title={name} />
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {overview}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(PosterCard);
