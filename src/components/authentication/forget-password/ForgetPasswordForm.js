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

import { recovery } from '../../../controllers/miApp.controller';
// ----------------------------------------------------------------------

export default function ForgetPasswordForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    mail: Yup.string().email('Debe ingresar un mail valido').required('Ingresa mail')
  });

  const formik = useFormik({
    initialValues: { mail: '' },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      // console.log(values);
      sendRecovery(values);
      // navigate('/dashboard', { replace: true });
    }
  });

  const sendRecovery = async function (values) {
    const postRecovery = await recovery(values);
    console.log('rdo', postRecovery.rdo);
    if (postRecovery.rdo === 0) {
      handleClickOpen();
    }

    if (postRecovery.rdo === 1) {
      alert(postRecovery.mensaje);
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
            autoComplete="username"
            type="mail"
            label="Mail"
            {...getFieldProps('mail')}
            error={Boolean(touched.mail && errors.mail)}
            helperText={touched.mail && errors.mail}
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
            Recuperar Contraseña
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Recuperar Contraseña</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Se envío un mail a tu correo para recuperar la contraseña.
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
