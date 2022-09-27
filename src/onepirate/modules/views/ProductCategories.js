import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity')
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100
  },
  '&:hover': {
    zIndex: 1
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15
  },
  '&:hover .imageMarked': {
    opacity: 0
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor'
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
}));

const images = [
  {
    url: 'https://www.stamboulian.com.ar/wp-content/uploads/2021/06/Imagen-Alerta-Boost-Final.jpg',
    title: 'Neumococo',
    width: '40%',
    description: 'Nueva Vacuna experimiental combinada contra la meningitis',
    link: 'https://www.stamboulian.com.ar/pacientes/nueva-vacuna-experimental-combinada-contra-la-meningitis/'
  },
  {
    url: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/05/2F200130165125-corona-virus-cdc-image-super-tease-1.jpg?quality=100&strip=info&w=460&h=260&crop=1',
    title: 'COVID',
    width: '20%',
    description: 'Coronavirus (CODVID-19) Recomendaciones Oficiales',
    link: 'https://www.stamboulian.com.ar/pacientes/coronavirus-covid-19-recomendaciones-oficiales/'
  },
  {
    url: 'http://www.materna.com.ar/Portals/0/images/articulos/embarazo/embarazo-20711-como-calcular-las-semanas-los-meses-y-los-trimestres-del-embarazo.jpg',
    title: 'Embarazo',
    width: '40%',
    description: 'Cómo calcular las semanas, los meses y los trimestres del embarazo',
    link: 'http://www.materna.com.ar/articulos/20711-como-calcular-las-semanas-los-meses-y-los-trimestres-del-embarazo'
  },
  {
    url: 'http://www.materna.com.ar/Portals/0/images/articulos/bebe/bebe-4257-suenio-y-lactancia-101837791.jpg',
    title: 'Mama',
    width: '40%',
    description: 'Amamantar siempre y en todo lugar',
    link: 'http://www.materna.com.ar/articulos/21193-amamantar-siempre-y-en-todo-lugar'
  },
  {
    url: 'http://www.materna.com.ar/Portals/0/images/articulos/novedades-20943-campana-antigripal-2016.jpg',
    title: 'Gripe',
    width: '40%',
    description: 'Campaña nacional de vacunación contra la Gripe',
    link: 'http://www.materna.com.ar/articulos/20943-campana-nacional-de-vacunacion-contra-la-gripe'
  },
  {
    url: 'https://www.clinicapueyrredon.com/wp-content/uploads/2021/09/suicidio2.jpg',
    title: 'Prevención',
    width: '20%',
    description: 'Día Mundial para la prevención del suicidio',
    link: 'https://www.clinicapueyrredon.com/dia-mundial-para-la-prevencion-del-suicidio-2/'
  },
  {
    url: 'https://www.clinicapueyrredon.com/wp-content/uploads/2021/08/esss.png',
    title: 'Pre Natales',
    width: '40%',
    description: '¿Cuales son los principales Estudios Pre Natales?',
    link: 'https://www.clinicapueyrredon.com/cuales-son-los-principales-estudios-prenatales/'
  },
  {
    url: 'https://cdn.prod-carehubs.net/n7-mcnn/7bcc9724adf7b803/uploads/2018/06/shutterstock_71055973.jpg',
    title: 'Natación',
    width: '20%',
    description: 'La Natación es saludable para los chicos',
    link: 'https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-q-and-a-swimming-safety-for-children/'
  },
  {
    url: 'https://www.clinicapueyrredon.com/wp-content/uploads/2021/04/controlped.jpg',
    title: 'Control',
    width: '40%',
    description: 'Importancia del control pediátrico del niño sano',
    link: 'https://www.clinicapueyrredon.com/importancia-del-control-pediatrico-del-nino-sano/'
  }
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        NOTICIAS
      </Typography>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {images.map((image) => (
          <ImageIconButton
            href={image.link}
            key={image.title}
            style={{
              width: image.width
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white'
              }}
            >
              <Typography component="h3" variant="h6" color="inherit" className="imageTitle">
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: 35,
                right: 10,
                top: 180,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white'
              }}
            >
              <Typography component="h3" variant="h5">
                {image.description}
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
