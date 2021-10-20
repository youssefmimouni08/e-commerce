import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$5',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464ed9e1-ad03-4bca-b5ed-418b1fc41734/air-zoom-pegasus-38-running-shoes-Hmsj6Q.png',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook',
    price: '$50',
    image:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/2/6/92665ae082_50177721_mackookairp.jpg',
  },
];

const Products = () => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
