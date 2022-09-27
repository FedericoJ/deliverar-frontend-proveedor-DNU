/* eslint-disable prefer-destructuring */
import urlWebServices from './webServices';

export const buscarHijosPorPadre = async function (id) {
  // url webservices
  const url = urlWebServices.buscarHijosPorPadre;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('idUsuario', localStorage.getItem('idusuario'));
  //   formData.append('idUsuario', id);
  console.log(formData);

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'x-access-token': localStorage.getItem('x'),
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    console.log(response);
    Promise.resolve(response);

    const rdo = response.status;

    const data = await response.json();
    console.log(data);

    switch (rdo) {
      case 200: {
        // guardo token
        // guardo usuario logueado

        const hijos = data;

        return { rdo: 0, hijos, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    alert(error);
  }
};

export const buscarDatosRef = async function () {
  // url webservices
  const url = urlWebServices.buscarGrupoSanguineo;
  // armo json con datos
  const formData = new URLSearchParams();

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'x-access-token': localStorage.getItem('x'),
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    const rdo = response.status;

    console.log('response', response);
    const data = await response.json();
    console.log('jsonresponse', data);

    switch (rdo) {
      case 200: {
        // guardo token
        // guardo usuario logueado
        const { grupos } = data;

        return { rdo: 0, grupos, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    alert(error);
  }
};

export const crearHijo = async function (usuario) {
  // url webservices
  const url = urlWebServices.crearHijo;

  // armo json con datos
  const formData = new URLSearchParams();

  formData.append('usuario', localStorage.getItem('idusuario'));
  formData.append('fechaNac', usuario.fecNacimiento);
  formData.append('grupoSanguineo', usuario.idGrupoSanguineo);
  formData.append('alergias', usuario.alergia);
  formData.append('enfermedades', usuario.enfermedad);
  formData.append('genero', usuario.idGenero);
  formData.append('nombre', usuario.nombre);
  formData.append('apellido', usuario.apellido);

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'x-access-token': localStorage.getItem('x'),
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    const rdo = response.status;

    console.log('response', response);
    const data = await response.json();
    console.log('jsonresponse', data);
    switch (rdo) {
      case 200: {
        // guardo token
        // guardo usuario logueado

        const getLogin = await buscarHijosPorPadre();

        const { hijos } = getLogin;

        localStorage.setItem('hijos', JSON.stringify(hijos));

        return { rdo: 0, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    alert(error);
  }
};

export const modificarHijo = async function (usuario) {
  // url webservices
  const url = urlWebServices.actualizarHijo;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('id', localStorage.getItem('idHijo'));
  formData.append('fecNacimiento', usuario.fecNacimiento);
  formData.append('idGrupoSanguineo', usuario.idGrupoSanguineo);
  formData.append('alergia', usuario.alergia);
  formData.append('enfermedad', usuario.enfermedad);
  formData.append('idGenero', usuario.idGenero);
  formData.append('nombre', usuario.nombre);
  formData.append('apellido', usuario.apellido);

  try {
    const response = await fetch(url, {
      method: 'PUT', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'x-access-token': localStorage.getItem('x'),
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    const rdo = response.status;

    console.log('response', response);
    const data = await response.json();
    console.log('jsonresponse', data);

    switch (rdo) {
      case 200: {
        const getLogin = await buscarHijosPorPadre();

        const { hijos } = getLogin;

        localStorage.setItem('hijos', JSON.stringify(hijos));

        return { rdo: 0, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    alert(error);
  }
};

export const BuscarHijo = async function () {
  // url webservices
  const url = urlWebServices.buscarHijo;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('id', localStorage.getItem('idHijo'));

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'x-access-token': localStorage.getItem('x'),
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    const rdo = response.status;

    console.log('response', response);
    const data = await response.json();
    console.log('jsonresponse', data);

    switch (rdo) {
      case 200: {
        const hijos = data;
        console.log('hijos', hijos);

        localStorage.setItem('nombreHijo', JSON.stringify(hijos.nombre));
        localStorage.setItem('apellidoHijo', JSON.stringify(hijos.apellido));
        localStorage.setItem('fecNacimientoHijo', JSON.stringify(hijos.fecNacimiento));
        localStorage.setItem('idGrupoSanguineoHijo', JSON.stringify(hijos.idGrupoSanguineo));
        localStorage.setItem('alergiaHijo', JSON.stringify(hijos.alergia));
        localStorage.setItem('enfermedadHijo', JSON.stringify(hijos.enfermedad));
        localStorage.setItem('idGeneroHijo', JSON.stringify(hijos.idGenero));
        return { rdo: 0, hijos, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    alert(error);
  }
};
