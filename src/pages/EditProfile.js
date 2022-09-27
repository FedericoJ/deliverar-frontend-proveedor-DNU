import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { EditProfileForm } from '../components/authentication/edit-profile';
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
  margin: theme.spacing(0, 0, 10, 5)
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

export default function Register() {
  return (
    <RootStyle title="Editar Perfil | Child-Hub">
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 0, mt: 0, mb: 0 }}>
            {/* Manage the job more effectively with Minimal */}
          </Typography>
          <img alt="perfil" src="/static/illustrations/editarPerfil.jpg" />
        </SectionStyle>
      </MHidden>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h3" gutterBottom align="center">
              Editá tu Perfil
            </Typography>
          </Box>

          {/* <AuthSocial /> */}

          <EditProfileForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
