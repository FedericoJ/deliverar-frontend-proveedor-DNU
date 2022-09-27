import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import ShopProductCard from './ProductCard';
import NewChildCard from './NewChildCard';

// ----------------------------------------------------------------------

NewChildList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function NewChildList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {/* <Grid xs={12} sm={6} md={5} /> */}
      {products.map((product) => (
        <Grid key={1} item xs={12} sm={6} md={2}>
          <NewChildCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
