import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import getProducts from '../src/services/products';
import { addProducts } from '../src/redux/actions/productAction';
import Products from '../src/components/views/home/components/Products';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Home = ({ products, error }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(products));
  }, [products]);

  return (
    <main>
      <Container className={classes.containerGrid} maxWidth="md">
        {error && <div>There was an error.</div>}
        {!error && products && <Products products={products} />}
      </Container>
    </main>
  );
};

export const getStaticProps = async () => {
  const data = await getProducts();

  return {
    props: data,
  };
};

export default Home;
