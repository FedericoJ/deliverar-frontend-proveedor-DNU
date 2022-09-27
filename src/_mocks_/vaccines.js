import faker from 'faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const vaccines = [...Array(4)].map(() => ({
  id: faker.datatype.uuid(),
  vaccine: sample(['BCG', 'Hepatitis B', 'Neumococo', 'Rotavirus']),
  dose: sample(['1° dosis', '2° dosis']),
  date: sample(['12/09/2021', '13/07/2021', '01/05/2021', '13/02/2021']),
  place: sample(['Banfield', 'Lanus', 'Flores'])
}));
export default vaccines;
