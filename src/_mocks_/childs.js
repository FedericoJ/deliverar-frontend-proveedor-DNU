import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgProduct } from '../utils/mockImages';
import { letterImages } from '../utils/letterImages';

// ----------------------------------------------------------------------

// const CHILD_NAME = ['Norberto', 'Almendra', 'Julieta', 'Romina'];
const CHILD_NAME = JSON.parse(localStorage.getItem('hijos'));

// ----------------------------------------------------------------------

const childs = [...Array(CHILD_NAME.length)].map((_, index) => {
  const setIndex = index + 1;
  console.log(CHILD_NAME[index].nombre);
  return {
    cover: letterImages(CHILD_NAME[index].idGenero),
    name: CHILD_NAME[index].nombre,
    id: CHILD_NAME[index].id
  };
});

export default childs;
