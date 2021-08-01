import React, { useEffect } from 'react';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import CartProduct from '../../src/components/views/cart/components/CartProduct';
import CartMain from '../../src/components/views/cart/components/CartMain';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'

const Cart = () => {
  const { products } = useSelector((state) => state.cartReducer);
  const router = useRouter()

  const page = {
    title: 'Cart',
    description:
      'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    image_url: 'https://source.unsplash.com/random',
  };

  const total = products.reduce((acc, current) => acc + (current.ebc || 10) * current.quantity , 0)

  useEffect(() => {
    if (!products.length) {
      router.push('/')
    }
  }, [products]);

  return (
    <Container maxWidth="lg">
      <main>
        {!products.length && <h2>{'There are no products in the shopping cart, redirect to home...'}</h2>}
        {products.length &&
          <>
            <CartMain page={page} />
            <Grid container spacing={5} justifyContent={'center'}>
              <Grid item md={9} lg={9}>
                {products.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </Grid>
              <Grid item md={3} lg={3}>
                <Paper elevation={0}>
                  <Typography variant="h6" gutterBottom>
                    Total
                  </Typography>
                  <Typography>${total}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </>
        }
      </main>
    </Container>
  );
};

export default Cart;
