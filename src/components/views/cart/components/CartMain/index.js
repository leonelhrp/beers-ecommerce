import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  cartMain: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center'
  },
  cartMainContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function CartMain({ page }) {
  const classes = useStyles();

  return (
    <Paper className={classes.cartMain} style={{ backgroundImage: `url(${page.image_url})` }}>
      <Grid container>
        <Grid item md={12}>
          <div className={classes.cartMainContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {page.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {page.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

CartMain.propTypes = {
  post: PropTypes.object,
};