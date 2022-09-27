import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@material-ui/core';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import { VaccineListHead, VaccineMoreMenu } from '../components/_dashboard/vaccine';
import VaccineNotFound from '../components/VaccinesNotFound';
//
import VACCINELIST from '../_mocks_/vaccines';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'vaccine', label: 'Vacuna', alignRight: false },
  { id: 'dose', label: 'Dosis', alignRight: false },
  { id: 'date', label: 'Fecha de Aplicacion', alignRight: false },
  { id: 'place', label: 'Lugar de Aplicacion', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_control) => _control.date.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function CheckVaccines() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('date');
  const [filterDate, setFilterDate] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const nombreHijo = JSON.parse(localStorage.getItem('nombreHijo'));

  const grillaVacunas = () => {
    // ----------------------------------------------------------------------
    const vacunas = JSON.parse(localStorage.getItem('listaVacunas'));
    // const childs = [...Array(CHILD_NAME.length)].map((_, index) => {
    //   const setIndex = index + 1;
    //   // console.log(CHILD_NAME[index].nombre);
    //   return {
    //     cover: letterImages(CHILD_NAME[index].idGenero),
    //     name: CHILD_NAME[index].nombre,
    //     id: CHILD_NAME[index].id
    //   };
    // });
    // return childs;
    // const CONTROLLIST = [controles];
    const listVacunas = [...Array(vacunas.length)].map((_, index) => ({
      id: vacunas[index].id,
      vaccine: vacunas[index].vacuna.descripcion,
      // vaccine: vacunas[index].id,
      dose: vacunas[index].dosis,
      date: vacunas[index].fecAplicacion,
      place: vacunas[index].lugarAplicacion
    }));
    return listVacunas;
  };

  const [VACCINELIST] = useState(() => grillaVacunas());
  console.log(VACCINELIST);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = VACCINELIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByDate = (event) => {
    setFilterDate(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - VACCINELIST.length) : 0;

  const filteredVaccines = applySortFilter(VACCINELIST, getComparator(order, orderBy), filterDate);

  const isVaccineNotFound = filteredVaccines.length === 0;

  return (
    <Page title="Vacunas | Child-Hub">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Consultar Vacunas de {nombreHijo}
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/registerVaccine"
            startIcon={<Icon icon={plusFill} />}
          >
            Registrar Vacuna
          </Button>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <VaccineListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={VACCINELIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredVaccines
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, vaccine, dose, date, place } = row;
                      // const isItemSelected = selected.indexOf(date) !== -1;

                      return (
                        // eslint-disable-next-line react/jsx-key
                        <TableRow>
                          <TableCell align="left">{vaccine}</TableCell>
                          <TableCell align="left">{dose}</TableCell>
                          <TableCell align="left">{date}</TableCell>
                          <TableCell align="left">{place}</TableCell>
                          <TableCell align="right">
                            <VaccineMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isVaccineNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <VaccineNotFound />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={VACCINELIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
