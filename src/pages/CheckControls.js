import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
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
import { ControlListHead, ControlMoreMenu } from '../components/_dashboard/control';
import ControlNotFound from '../components/ControlNotFound';
//
// import CONTROLLIST from '../_mocks_/controls';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'date', label: 'Fecha Control', alignRight: false },
  { id: 'weight', label: 'Peso', alignRight: false },
  { id: 'height', label: 'Altura', alignRight: false },
  { id: 'headDiameter', label: 'Diametro Cabeza', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

// -------------------

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
      (_control) => _control.fecControl.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function CheckControls() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('date');
  const [filterDate, setFilterDate] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const nombreHijo = JSON.parse(localStorage.getItem('nombreHijo'));

  const grillaControles = () => {
    // ----------------------------------------------------------------------
    const controles = JSON.parse(localStorage.getItem('controles'));
    const controls = [...Array(controles.length)].map((_, index) => ({
      id: controles[index].id,
      date: controles[index].fecControl,
      weight: controles[index].peso,
      height: controles[index].altura,
      headDiameter: controles[index].diametroCabeza
    }));
    return controls;
  };

  const [CONTROLLIST] = useState(() => grillaControles());
  console.log(CONTROLLIST);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = CONTROLLIST.map((n) => n.name);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - CONTROLLIST.length) : 0;

  const filteredControls = applySortFilter(CONTROLLIST, getComparator(order, orderBy), filterDate);

  const isControlNotFound = filteredControls.length === 0;

  return (
    <Page title="Controles | Child-Hub">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Consultar Controles de {nombreHijo}
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/registerControl"
            startIcon={<Icon icon={plusFill} />}
          >
            Nuevo Control
          </Button>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ControlListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={CONTROLLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredControls
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      // const { id, name, role, status, company, avatarUrl, isVerified } = row;
                      const { id, date, weight, height, headDiameter } = row;

                      return (
                        // eslint-disable-next-line react/jsx-key
                        <TableRow>
                          <TableCell align="left">{date}</TableCell>
                          <TableCell align="left">{weight}</TableCell>
                          <TableCell align="left">{height}</TableCell>
                          <TableCell align="left">{headDiameter}</TableCell>
                          <TableCell align="right">
                            <ControlMoreMenu />
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
                {isControlNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <ControlNotFound />
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
            count={CONTROLLIST.length}
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
