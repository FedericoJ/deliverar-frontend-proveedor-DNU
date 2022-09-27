import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://www.guiadelnino.com/var/guiadelnino.com/storage/images/bebe/recien-nacidos/como-cuidar-a-un-recien-nacido/7620719-23-esl-ES/como-cuidar-a-un-recien-nacido.jpg';

const onDownload = () => {
  const link = document.createElement('a');
  link.download = `CalendarioVacunacion.jpg`;
  link.href = '/static/illustrations/vacunacion-calendario.jpg';
  link.click();
};

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        CUIDÁ A LOS QUE MÁS QUERÉS
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}>
        La información más actualizada para tu familia
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={onDownload}
        component="a"
        // href="https://bancos.salud.gob.ar/sites/default/files/2020-10/calendario-nacional-vacunacion-2020.pdf"
        sx={{ minWidth: 200 }}
      >
        Calendario de Vacunación
      </Button>
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}
