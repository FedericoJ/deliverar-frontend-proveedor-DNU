import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import ColorPreview from '../../ColorPreview';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const ChildImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

NewChildCard.propTypes = {
  product: PropTypes.object
};

export default function NewChildCard({ product }) {
  const { name, cover, status } = product;

  return (
    <Link
      to="/dashboard/registerChild"
      color="inherit"
      style={{ textDecoration: 'none' }}
      component={RouterLink}
    >
      <Card>
        <Box sx={{ pt: '60%', position: 'relative' }}>
          <ChildImgStyle alt={name} src={cover} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="subtitle1" align="center" noWrap>
            <h3>{name}</h3>
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
}
