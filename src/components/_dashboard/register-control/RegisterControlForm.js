import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Link, Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { crearControl } from '../../../controllers/controlesPediatricosController';

// ----------------------------------------------------------------------

export default function RegisterControlForm() {
  const [blood, setblood] = React.useState('');

  const handleChange = (event) => {
    setblood(event.target.value);
  };

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    altura: Yup.number().required('La Altura es requerida'),
    peso: Yup.number().required('El Peso es requerido'),
    fecControl: Yup.date().required('La Fecha de Control Pediátrico es Obligatoria')
  });

  const formik = useFormik({
    initialValues: {
      altura: '',
      peso: '',
      fecControl: '',
      diametroCabeza: '',
      medicamentos: '',
      obsMedicamento: '',
      estudioMedico: '',
      obsEstudioMedico: '',
      observaciones: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
      creaControl(values);
      // navigate('/dashboard', { replace: true });
    }
  });

  const creaControl = async function (values) {
    const postCrearControl = await crearControl(values);

    if (postCrearControl.rdo === 0) {
      handleClickOpen();
    }

    if (postCrearControl.rdo === 1) {
      alert(postCrearControl.mensaje);
    }
  };

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const [value, setValue] = React.useState('Controlled');

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
        <Stack spacing={3}>
          <TextField
            id="date"
            type="date"
            label="Fecha de Control Pediátrico"
            InputLabelProps={{
              shrink: true
            }}
            {...getFieldProps('fecControl')}
            error={Boolean(touched.fecControl && errors.fecControl)}
            helperText={touched.fecControl && errors.fecControl}
          />

          <TextField
            fullWidth
            type="number"
            label="Peso (Kg)"
            {...getFieldProps('peso')}
            error={Boolean(touched.peso && errors.peso)}
            helperText={touched.peso && errors.peso}
          />

          <TextField
            fullWidth
            type="number"
            label="Altura (metros)"
            {...getFieldProps('altura')}
            error={Boolean(touched.altura && errors.altura)}
            helperText={touched.altura && errors.altura}
          />

          <TextField
            fullWidth
            type="number"
            label="Diametro de Cabeza"
            {...getFieldProps('diametroCabeza')}
          />

          <Stack spacing={3} sx={{ width: 480 }}>
            <TextField
              fullWidth
              label="Medicamentos Recetados"
              {...getFieldProps('medicamentos')}
            />
          </Stack>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 0, width: '49ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              label="Instrucciones Medicamentos Recetados"
              multiline
              rows={5}
              {...getFieldProps('obsMedicamento')}
            />
          </Box>

          <Stack spacing={3} sx={{ width: 480 }}>
            <TextField
              fullWidth
              label="Estudios Médicos a realizar"
              {...getFieldProps('estudioMedico')}
            />
          </Stack>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 0, width: '49ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              label="Resultados de Estudios Medicos"
              multiline
              rows={5}
              {...getFieldProps('obsEstudioMedico')}
            />
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: '0', width: '49ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              label="Observaciones"
              multiline
              rows={10}
              {...getFieldProps('observaciones')}
            />
          </Box>

          <Button fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Registrar Control Pediátrico
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Control Pediátrico</DialogTitle>
            <DialogContent>
              <DialogContentText> Se registró el control correctamente. </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link component={RouterLink} to="/dashboard/DashboardChild">
                <Button onClick={handleClose} color="primary">
                  Aceptar
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
