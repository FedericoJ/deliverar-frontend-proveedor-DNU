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
import moment from 'moment';
import { modificarHijo } from '../../../controllers/hijoController';
// ----------------------------------------------------------------------

export default function EditChildForm() {
  const [idGrupoSanguineo, setidGrupoSanguineo] = React.useState('');

  const [idGenero, setidGenero] = React.useState('');

  const handleChange = (event) => {
    setidGrupoSanguineo(event.target.value);
    setidGenero(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, 'Demasiado Corto!')
      .max(50, 'Demasiado Largo!')
      .required('El Nombre es requerido'),
    apellido: Yup.string()
      .min(2, 'Demasiado Corto!')
      .max(50, 'Demasiado Largo!')
      .required('El Apellido es requerido'),
    fecNacimiento: Yup.date().required('La Fecha de Nacimiento es Obligatoria'),
    // idGrupoSanguineo: Yup.string().required('El Grupo Sanguineo es Obligatorio'),
    idGenero: Yup.string().required('El Género es Obligatorio')
  });

  const fecNacimiento = moment(JSON.parse(localStorage.getItem('fecNacimientoHijo'))).format(
    'YYYY-MM-DD'
  );
  const formik = useFormik({
    initialValues: {
      nombre: JSON.parse(localStorage.getItem('nombreHijo')),
      apellido: JSON.parse(localStorage.getItem('apellidoHijo')),
      fecNacimiento,
      idGrupoSanguineo: localStorage.getItem('idGrupoSanguineoHijo'),
      idGenero: localStorage.getItem('idGeneroHijo'),
      enfermedad: JSON.parse(localStorage.getItem('enfermedadHijo')),
      alergia: JSON.parse(localStorage.getItem('alergiaHijo'))
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      actualizaHijo(values);
      console.log(values);
      // navigate('/dashboard', { replace: true });
    }
  });

  const actualizaHijo = async function (values) {
    const putActualizarHijo = await modificarHijo(values);

    if (putActualizarHijo.rdo === 0) {
      handleClickOpen();
    }

    if (putActualizarHijo.rdo === 1) {
      alert(putActualizarHijo.mensaje);
    }
  };

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const diseases = [];

  const allergies = [];

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
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
            id="date"
            type="date"
            label="Fecha de Nacimiento"
            InputLabelProps={{
              shrink: true
            }}
            {...getFieldProps('fecNacimiento')}
            error={Boolean(touched.fecNacimiento && errors.fecNacimiento)}
            helperText={touched.fecNacimiento && errors.fecNacimiento}
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Género</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={idGenero}
                label="Género"
                onChange={handleChange}
                {...getFieldProps('idGenero')}
                error={Boolean(touched.idGenero && errors.idGenero)}
                helperText={touched.idGenero && errors.idGenero}
              >
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Femenino</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Grupo Sanguineo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={idGrupoSanguineo}
                label="Grupo Sanguineo"
                onChange={handleChange}
                {...getFieldProps('idGrupoSanguineo')}
                error={Boolean(touched.idGrupoSanguineo && errors.idGrupoSanguineo)}
                helperText={touched.idGrupoSanguineo && errors.idGrupoSanguineo}
              >
                <MenuItem value={1}>A+</MenuItem>
                <MenuItem value={2}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={4}>B-</MenuItem>
                <MenuItem value={5}>AB+</MenuItem>
                <MenuItem value={6}>AB-</MenuItem>
                <MenuItem value={7}>0+</MenuItem>
                <MenuItem value={8}>0-</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField fullWidth label="Enfermedades Cronicas" {...getFieldProps('enfermedad')} />
          <TextField fullWidth label="Alergias" {...getFieldProps('alergia')} />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            // onClick={handleClickOpen}
          >
            Guardar
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Editar Hijo</DialogTitle>
            <DialogContent>
              <DialogContentText> Los cambios se guardaron correctamente </DialogContentText>
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
