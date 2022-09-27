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
import { EditChildForm } from '../components/_dashboard/edit-child';
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

export default function EditChild() {
  return (
    <RootStyle title="Editar Hijo | Child-Hub">
      {/* <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout> */}

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 0, mt: 0, mb: 0 }}>
            {/* Manage the job more effectively with Minimal */}
          </Typography>
          <img alt="bebe" src="/static/illustrations/bebe.jpg" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h3" gutterBottom>
              Editá los Datos de tu Hijo
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
              Free forever. No credit card needed.
            </Typography> */}
          </Box>

          {/* <AuthSocial /> */}

          <EditChildForm />

          {/* <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography> */}

          {/* <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
