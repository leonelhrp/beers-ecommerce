import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Link,
  Box,
} from '@material-ui/core';
import Copyright from '../Copyright';
import useStyles from './styles';
import LineIcon from '../../../assets/icons/LineIcon';
import footers from '../../../consts/footers';

const AppFooter = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <LineIcon className={classes.lineIcon} />
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default AppFooter;
