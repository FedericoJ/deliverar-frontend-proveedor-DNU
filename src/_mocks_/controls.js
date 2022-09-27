import faker from 'faker';
import { sample } from 'lodash';
// utils
// import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const controls = [...Array(4)].map(() => ({
  id: faker.datatype.uuid(),
  date: sample(['11/10/2021', '12/10/2021', '13/10/2021', '14/10/2021']),
  weight: sample(['5 kg', '4.5 kg', '3 kg', '6 kg']),
  height: sample(['105 cm', '90 cm', '79 cm', '98 cm']),
  headDiameter: sample(['30 cm', '33 cm', '37 cm', '38 cm'])
}));
export default controls;
