import * as Yup from 'yup';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate, Navigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import { login } from '../../../controllers/miApp.controller';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usuarioValido, setUsuarioValido] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('La cuenta de mail debe ser valida').required('Mail es requerido'),
    // email2: Yup.string().email('La cuenta de mail debe ser valida').required('Mail es requerido'),
    password: Yup.string().required('Contraseña es requerido')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      // email2: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      validarLogin(values);
      // alert(JSON.stringify(values, null, 2));
      // navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Ejecuto el endopoint para validar login
  const validarLogin = async function (datos) {
    const getLogin = await login(datos);
    console.log(getLogin);

    if (getLogin.rdo === 0) {
      // setUsuarioValido(true);
      navigate('/dashboard', { replace: true });
    }
    if (getLogin.rdo === 1) {
      alert(getLogin.mensaje);
    }
  };

  // const redirect = () => {
  //   if (usuarioValido) {
  //     return <Navigate to="/dashboard/app" />;
  //   }
  // };

  return (
    <FormikProvider value={formik}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Mail"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Contraseña"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ my: 2 }}>
          {/* <Link component={RouterLink} variant="subtitle2"> */}
          {/* Aca va un pop-up */}
          <Link component={RouterLink} to="/forgetPassword">
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
              ¿Olvidaste tu contraseña?
            </Button>
          </Link>
          {/* </Link> */}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ my: 2 }}>
          ¿No tenes una cuenta?&nbsp;
          <Link component={RouterLink} variant="subtitle2" to="/Register">
            Registrate
          </Link>
        </Stack>
        {/* <Link component={RouterLink} to="/dashboard/app"> */}
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          // loading={isSubmitting}
          // onClick={(e) => {
          //   handleEntailmentRequest(e);
          // }}
        >
          <p style={{ color: 'white' }}> Ingresar </p>
        </Button>
        {/* </Link> */}
      </form>
    </FormikProvider>
  );
}
