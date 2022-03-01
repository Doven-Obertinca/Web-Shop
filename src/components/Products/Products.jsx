import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product'
import useStyles from './styles';

// const products = [
//     {id: 1, name: 'Shoes', description: 'Running shoes.', price: '5€ ', image: '/src/assets/feet-1840619_1920.jpg'},
//     {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '10€ ', image: "https://pixabay.com/photos/desk-laptop-notebook-pen-workspace-593327"},

// ]


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
  
    if (!products.length) return <p>Loading...</p>;
  
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
  };


export default Products;