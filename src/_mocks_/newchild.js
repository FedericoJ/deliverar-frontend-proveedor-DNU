// utils
import { mockImgProduct } from '../utils/mockImages';
import { letterImages } from '../utils/letterImages';

// ----------------------------------------------------------------------

const CHILD_NAME = ['Agregar Hijo'];

// ----------------------------------------------------------------------

const newchilds = [...Array(1)].map((_, index) => {
  const setIndex = 10;

  return {
    cover: letterImages(setIndex),
    name: CHILD_NAME[index]
  };
});

export default newchilds;
