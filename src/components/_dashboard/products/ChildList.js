import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import ShopProductCard from './ProductCard';
import ChildCard from './ChildCard';

// ----------------------------------------------------------------------

ChildList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ChildList({ products = [], ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={6} sm={3} md={2}>
          <ChildCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
