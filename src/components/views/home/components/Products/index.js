import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import CornerIcon from '../../../../../assets/icons/CornerIcon';
import { addProducts } from '../../../../../redux/actions/productAction';
import { addToCart } from '../../../../../redux/actions/cartAction';
import useStyles from './styles';

const Products = ({ products }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    enqueueSnackbar('Add to cart correctly!', { variant: 'success' });
  };

  useEffect(() => {
    dispatch(addProducts(products));
  }, [products]);

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.product}>
            <CardHeader
              title={product.name}
              subheader={product.tagline}
              action={<CornerIcon />}
            />
            <CardMedia
              className={classes.productMedia}
              image={product.image_url}
              title={product.name}
            />
            <CardContent className={classes.productContent}>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.ebc || 10}
              </Typography>
              <Typography>
                {product.volume.value} {product.volume.unit}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingBasket />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
