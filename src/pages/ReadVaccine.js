import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
// import { RegisterForm } from '../components/authentication/register';
import { ReadVaccineForm } from '../components/_dashboard/read-vaccine';
import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '60%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  margin: theme.spacing(0, 0, 25, 5)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'left',
  padding: theme.spacing(0, 0)
}));

// ----------------------------------------------------------------------

export default function ReadVaccine() {
  return (
    <RootStyle title="Consulta Vacuna | Child-Hub">
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 0, mt: 0, mb: 0 }}>
            {/* Control Pediátrico */}
          </Typography>
          <img alt="Vacuna" src="/static/illustrations/vacunacion.jpg" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              Vacuna
            </Typography>
          </Box>
          <ReadVaccineForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
