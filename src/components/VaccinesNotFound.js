// material
import { Paper, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function VaccineNotFound() {
  return (
    <Paper>
      <Typography gutterBottom align="center" variant="subtitle1">
        No se registraron vacunas.
      </Typography>
    </Paper>
  );
}
