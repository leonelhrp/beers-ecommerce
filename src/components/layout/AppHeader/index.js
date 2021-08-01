import React from 'react';
import PropTypes from 'prop-types';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
  Link,
  Typography,
  Toolbar,
  Button,
  IconButton
} from '@material-ui/core';
import { useRouter } from 'next/router'
import useStyles from './styles';
import DecorationIcon from '../../../assets/icons/DecorationIcon';
import ArrowDecorationIcon from '../../../assets/icons/ArrowDecorationIcon';

export default function Header(props) {
  const classes = useStyles();
  const router = useRouter()
  const { categories, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/"
        >
          Home
        </Link>
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          data-cy={title.split(' ').join('')}
          onClick={() => router.push('/')}
        >
          <DecorationIcon />
          {title}
          <DecorationIcon />
        </Typography>
        <Button variant="outlined" size="small" className={classes.linkedinButton} onClick={() => window.open('https://www.linkedin.com/in/leonelhrp/', '_blank')}>
          LinkedIn Profile
        </Button>
        <IconButton onClick={() => router.push('/cart')}>
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {categories.map((category) => (
          <Link
            color="inherit"
            noWrap
            key={category.title}
            variant="body2"
            href={category.url}
            className={classes.toolbarLink}
            data-cy={category.title.split(' ').join('')}
          >
            <ArrowDecorationIcon />{' '}
            {category.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.string,
};