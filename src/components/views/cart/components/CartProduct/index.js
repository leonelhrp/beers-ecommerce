import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Typography,
  Hidden,
} from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { addToCart, removeFromCart, subQuantity } from '../../../../../redux/actions/cartAction';

const CartProduct = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    if (product.quantity > 1) {
      dispatch(subQuantity(product));
    } else {
      dispatch(removeFromCart(product));
    }
  };

  return (
    <Grid item xs={12} md={12}>
      <div>
        <Card className={classes.cart}>
          <Hidden xsDown>
            <CardMedia
              className={classes.cartMedia}
              image={product.image_url}
              title={product.name}
            />
          </Hidden>
          <div className={classes.cartDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {product.name}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {product.tagline}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                ${product.ebc || 10}
              </Typography>
              <Button
                color="primary"
                onClick={() => handleRemoveFromCart(product)}
              >
                {product.quantity > 1 ? <RemoveIcon /> : <DeleteIcon />}
              </Button>
              <Button>{product.quantity}</Button>
              <Button
                color="primary"
                onClick={() => handleAddToCart(product)}
              >
                <AddIcon />
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </Grid>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object,
};

export default CartProduct;
