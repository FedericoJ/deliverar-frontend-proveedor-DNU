import * as Yup from 'yup';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Link, Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { registrarse } from '../../../controllers/miApp.controller';
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    nombre: Yup.string().min(2, 'Muy corto!').max(50, 'Muy largo!').required('Ingresa nombre'),
    apellido: Yup.string().min(2, 'Muy corto!').max(50, 'Muy largo!').required('Ingresa apellido'),
    dni: Yup.string().min(8, 'Muy corto!').max(8, 'Muy largo!').required('Ingresa DNI'),
    telefono: Yup.string().min(4, 'Muy corto!').max(12, 'Muy largo!').required('Ingresa telefono'),
    mail: Yup.string().email('Debe ingresar un mail valido').required('Ingresa mail'),
    password: Yup.string().required('Ingresa contraseña'),
    password2: Yup.string().required('Ingresa contraseña')
  });

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      dni: '',
      telefono: '',
      mail: '',
      password: '',
      password2: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      signUp(values);
      // navigate('/dashboard', { replace: true });
    }
  });

  const signUp = async function (values) {
    const postRegistrarse = await registrarse(values);

    if (postRegistrarse.rdo === 0) {
      handleClickOpen();
    }

    if (postRegistrarse.rdo === 1) {
      alert(postRegistrarse.mensaje);
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
            label="Nombre"
            {...getFieldProps('nombre')}
            error={Boolean(touched.nombre && errors.nombre)}
            helperText={touched.nombre && errors.nombre}
          />

          <TextField
            fullWidth
            label="Apellido"
            {...getFieldProps('apellido')}
            error={Boolean(touched.apellido && errors.apellido)}
            helperText={touched.apellido && errors.apellido}
          />

          <TextField
            fullWidth
            label="DNI"
            {...getFieldProps('dni')}
            error={Boolean(touched.dni && errors.dni)}
            helperText={touched.dni && errors.dni}
          />

          <TextField
            fullWidth
            autoComplete="username"
            type="mail"
            label="Mail"
            {...getFieldProps('mail')}
            error={Boolean(touched.mail && errors.mail)}
            helperText={touched.mail && errors.mail}
          />

          <TextField
            fullWidth
            label="Telefono"
            {...getFieldProps('telefono')}
            error={Boolean(touched.telefono && errors.telefono)}
            helperText={touched.telefono && errors.telefono}
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
          {/* <Link component={RouterLink} to="/login">
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              <p style={{ color: 'white' }}> Registrate </p>
            </LoadingButton>
          </Link> */}
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            // onClick={handleClickOpen}
          >
            Registrate
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Registro</DialogTitle>
            <DialogContent>
              <DialogContentText>
                El registro se realizó correctamente, haga click en Aceptar para ser redirigido.
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
