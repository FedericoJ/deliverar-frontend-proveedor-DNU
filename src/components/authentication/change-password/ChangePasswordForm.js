import * as Yup from 'yup';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// material
import { Link, Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { actualizarContraseña } from '../../../controllers/miApp.controller';
// ----------------------------------------------------------------------

export default function ChangePasswordForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const search = useLocation;
  const params = new URLSearchParams(search);
  const mail = params.get('mail');
  console.log('mail', mail);

  const RegisterSchema = Yup.object().shape({
    password: Yup.string().required('Ingresa contraseña'),
    password2: Yup.string().required('Ingresa contraseña')
  });

  const formik = useFormik({
    initialValues: {
      mail: localStorage.getItem('mailRecovery'),
      password: '',
      password2: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      updatePassword(values);
      // navigate('/dashboard', { replace: true });
    }
  });

  const updatePassword = async function (values) {
    const postUpdate = await actualizarContraseña(values);

    if (postUpdate.rdo === 0) {
      handleClickOpen();
    }

    if (postUpdate.rdo === 1) {
      alert(postUpdate.mensaje);
    }
  };

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Contraseña"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Repetir contraseña"
            {...getFieldProps('password2')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password2 && errors.password2)}
            helperText={touched.password2 && errors.password2}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            // onClick={handleClickOpen}
          >
            Actualizar Contraseña
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Cambio de Contraseña</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Contraseña actualizada correctamente, haga click en Aceptar para ser redirigido.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link component={RouterLink} to="/login">
                <Button onClick={handleClose} color="primary">
                  Aceptar
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
          {/* </Link> */}
        </Stack>
      </Form>
    </FormikProvider>
  );
}
