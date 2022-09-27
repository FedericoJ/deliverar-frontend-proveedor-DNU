import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '../components/Typography';

function ProductSmokingHero() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid black',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5
        }}
      >
        <Typography variant="h4" component="span" onClick={handleClickOpen}>
          ¿Necesitas Ayuda?
        </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nos podés encontrar en:</DialogTitle>
        <DialogContent>
          <DialogContentText>Email: info@child-hub.com</DialogContentText>
          <DialogContentText> Teléfono: +54 9 11-5401-2803 </DialogContentText>
          <DialogContentText>
            {/* <HomeIcon />  */}
            Dirección: Av. Siempreviva 1234, Buenos Aires, Argentina
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        ¡Estamos a disposición para lo que necesites!
      </Typography>
      <Box
        component="img"
        src="/static/illustrations/child-hub.png"
        alt="buoy"
        sx={{ width: 80 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
