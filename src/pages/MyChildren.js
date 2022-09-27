import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Grid, Container, Stack, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
// components
import Page from '../components/Page';
import { NewChildList, ChildList } from '../components/_dashboard/products';
//
// import CHILDS from '../_mocks_/childs';
import NEWCHILD from '../_mocks_/newchild';

import { letterImages } from '../utils/letterImages';
// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const traerHijos = () => {
    const CHILD_NAME = JSON.parse(localStorage.getItem('hijos'));

    // ----------------------------------------------------------------------

    const childs = [...Array(CHILD_NAME.length)].map((_, index) => {
      const setIndex = index + 1;
      // console.log(CHILD_NAME[index].nombre);
      return {
        cover: letterImages(CHILD_NAME[index].idGenero),
        name: CHILD_NAME[index].nombre,
        id: CHILD_NAME[index].id
      };
    });
    return childs;
  };

  const [hijos, setHijos] = useState(() => traerHijos());

  return (
    <Page title="Mis Hijos | Child-Hub">
      <Container>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Mis Hijos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <ChildList products={hijos} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <NewChildList products={NEWCHILD} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
