import React from 'react';
import { Typography, Link as MuiLink } from '@material-ui/core';
import { SITE_TITLE } from '../../../consts/globals';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        {SITE_TITLE}
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
