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

// ----------------------------------------------------------------------

export default function ReadVaccineForm() {
  const [vaccine, setvaccine] = React.useState('');
  const [dosis, setdosis] = React.useState('');

  const handleChange = (event) => {
    setvaccine(event.target.value);
    setdosis(event.target.value);
  };

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    dateAplication: Yup.date().required('La Fecha de Aplicación es Obligatoria'),
    vaccine: Yup.date().required('La Vacuna es Obligatoria'),
    dosis: Yup.date().required('La Dosis es Obligatoria')
  });

  const formik = useFormik({
    initialValues: {
      dateAplication: '',
      vaccine: '',
      dosis: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Vacuna Aplicada</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vaccine}
                label="Vacuna Aplicada"
                disabled="true"
                onChange={handleChange}
                {...getFieldProps('vaccine')}
                error={Boolean(touched.vaccine && errors.vaccine)}
                helperText={touched.vaccine && errors.vaccine}
              >
                <MenuItem value={1}>BCG</MenuItem>
                <MenuItem value={2}>Hepatitis B</MenuItem>
                <MenuItem value={3}>Neumococo</MenuItem>
                <MenuItem value={4}>Quintuple</MenuItem>
                <MenuItem value={5}>IPV</MenuItem>
                <MenuItem value={6}>Rotavirus</MenuItem>
                <MenuItem value={7}>Antigripal</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Dosis</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dosis}
                label="Dosis"
                disabled="true"
                onChange={handleChange}
                {...getFieldProps('dosis')}
                error={Boolean(touched.dosis && errors.dosis)}
                helperText={touched.dosis && errors.dosis}
              >
                <MenuItem value={1}>1° Dosis</MenuItem>
                <MenuItem value={2}>2° Dosis</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="date"
            type="date"
            label="Fecha de Aplicación"
            disabled="true"
            InputLabelProps={{
              shrink: true
            }}
            {...getFieldProps('dateAplication')}
            error={Boolean(touched.dateAplication && errors.dateAplication)}
            helperText={touched.dateAplication && errors.dateAplication}
          />

          <TextField fullWidth label="Lugar de Aplicación" disabled="true" />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            onClick={handleClickOpen}
            component={RouterLink}
            to="/dashboard/"
          >
            Cerrar
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
