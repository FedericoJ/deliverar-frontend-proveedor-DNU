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

// ----------------------------------------------------------------------

export default function EditProfileForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Muy corto!').max(50, 'Muy largo!').required('Ingresa nombre'),
    lastName: Yup.string().min(2, 'Muy corto!').max(50, 'Muy largo!').required('Ingresa apellido'),
    dni: Yup.string().min(8, 'Muy corto!').max(8, 'Muy largo!').required('Ingresa DNI'),
    telefono: Yup.string().min(4, 'Muy corto!').max(12, 'Muy largo!').required('Ingresa telefono'),
    email: Yup.string().email('Debe ingresar un mail valido').required('Ingresa mail'),
    password: Yup.string().required('Ingresa contraseña'),
    password2: Yup.string().required('Ingresa contraseña')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dni: '',
      telefono: '',
      email: '',
      password: '',
      password2: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

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
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />

          <TextField
            fullWidth
            label="Apellido"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
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
            type="email"
            label="Mail"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
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
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            onClick={handleClickOpen}
          >
            Guardar
          </LoadingButton>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Modificación</DialogTitle>
            <DialogContent>
              <DialogContentText> Los cambios se guardaron exitosamente. </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link component={RouterLink} to="/dashboard/app">
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
