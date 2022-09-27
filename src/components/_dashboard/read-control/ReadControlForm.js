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

export default function ReadControlForm() {
  const [blood, setblood] = React.useState('');

  const handleChange = (event) => {
    setblood(event.target.value);
  };

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    high: Yup.number().required('La Altura es requerida'),
    weight: Yup.number().required('El Peso es requerido'),
    dateControl: Yup.date().required('La Fecha de Control Pediátrico es Obligatoria')
  });

  const formik = useFormik({
    initialValues: {
      high: '',
      weight: '',
      dateControl: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const medicines = [];

  const studies = [];

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
            disabled="true"
            InputLabelProps={{
              shrink: true
            }}
            {...getFieldProps('dateControl')}
            error={Boolean(touched.dateControl && errors.dateControl)}
            helperText={touched.dateControl && errors.dateControl}
          />

          <TextField
            fullWidth
            type="number"
            label="Peso (Kg)"
            disabled="true"
            {...getFieldProps('weight')}
            error={Boolean(touched.weight && errors.weight)}
            helperText={touched.weight && errors.weight}
          />

          <TextField
            fullWidth
            type="number"
            label="Altura (metros)"
            disabled="true"
            {...getFieldProps('high')}
            error={Boolean(touched.high && errors.high)}
            helperText={touched.high && errors.high}
          />

          <TextField fullWidth type="number" label="Diametro de Cabeza" disabled="true" />

          <Stack spacing={3} sx={{ width: 480 }}>
            <Autocomplete
              multiple
              id="tags-filled"
              disabled="true"
              freeSolo
              options={medicines}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} label="Medicamentos Recetados" placeholder="Medicamentos" />
              )}
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
              disabled="true"
              rows={5}
              defaultValue=""
            />
          </Box>

          <Stack spacing={3} sx={{ width: 480 }}>
            <Autocomplete
              multiple
              id="tags-filled"
              freeSolo
              disabled="true"
              options={studies}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} label="Estudios Médicos a realizar" placeholder="Estudios" />
              )}
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
              disabled="true"
              multiline
              rows={5}
              defaultValue=""
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
              disabled="true"
              multiline
              rows={10}
              defaultValue=""
            />
          </Box>
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            onClick={handleClickOpen}
            component={RouterLink}
            to="/dashboard/checkControls"
          >
            Cerrar
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
