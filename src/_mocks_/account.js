// ----------------------------------------------------------------------

const account = {
  displayName: localStorage.getItem('nombre'),
  email: localStorage.getItem('email'),
  DNI: localStorage.getItem('dni'),
  photoURL: '/static/mock-images/avatars/avatar_default.jpg'
};

export default account;
