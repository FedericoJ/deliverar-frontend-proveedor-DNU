/* eslint-disable prefer-destructuring */
import urlWebServices from './webServices';
import { buscarHijosPorPadre } from './hijoController';

export const login = async function (login) {
  // url webservices
  const url = urlWebServices.login;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('email', login.email);
  formData.append('password', login.password);
  console.log('dato', formData);
  // console.log("url",url);
  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        // 'x-access-token': WebToken.webToken,
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
      case 201: {
        // guardo token
        localStorage.setItem('x', data.token);
        // guardo usuario logueado
        // const { user } = data.usuario;
        console.log(data.usuario);
        localStorage.setItem('idusuario', data.usuario.id);
        localStorage.setItem('nombre', data.usuario.nombre);
        localStorage.setItem('email', data.usuario.mail);
        localStorage.setItem('dni', data.usuario.dni);

        const getHijos = await buscarHijosPorPadre(data.usuario.id);
        console.log('getHijos', getHijos);

        const hijos = getHijos.hijos;

        if (!hijos) {
          localStorage.setItem('hijos', '[]');
        } else {
          localStorage.setItem('hijos', JSON.stringify(hijos));
        }

        return { rdo: 0, mensaje: 'Ok' }; // correcto
      }
      case 202: {
        // error mail
        return { rdo: 1, mensaje: 'El mail ingresado no existe en nuestra base.' };
      }
      case 203: {
        // error password
        return { rdo: 1, mensaje: 'La contraseña no es correcta.' };
      }
      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
  }
};

export const registrarse = async function (usuario) {
  // url webservices
  const url = urlWebServices.registrarUsuario;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('mail', usuario.mail);
  formData.append('password', usuario.password);
  formData.append('dni', usuario.dni);
  formData.append('telefono', usuario.telefono);
  formData.append('nombre', usuario.nombre);
  formData.append('apellido', usuario.apellido);

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        // 'x-access-token': WebToken.webToken,
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
      case 201: {
        // guardo token
        localStorage.setItem('x', data.token);
        // guardo usuario logueado
        const user = data.usuario;
        localStorage.setItem('nombre', user.nombre);
        localStorage.setItem('idusuario', user.id);

        return { rdo: 0, mensaje: 'Ok' }; // correcto
      }

      case 202: {
        const user = data.message;

        return { rdo: 1, mensaje: 'Ya existe un usuario registrado con esos datos' };
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

export const modificarPerfil = async function (usuario) {
  // url webservices
  const url = urlWebServices.actualizarUsuario;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('mail', usuario.mail);
  formData.append('dni', usuario.dni);
  formData.append('telefono', usuario.telefono);
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
      case 201: {
        // guardo token
        // guardo usuario logueado
        const user = data.usuario;
        localStorage.setItem('nombre', user.nombre);
        localStorage.setItem('idusuario', user.id);

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

export const BuscarUsuario = async function () {
  // url webservices
  const url = urlWebServices.buscarUsuarioPorID;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('id', localStorage.getItem('idusuario'));

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
      case 201: {
        // guardo token
        // guardo usuario logueado
        const user = data.usuario;

        return { rdo: 0, user, mensaje: 'Ok' }; // correcto
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

export const actualizarContraseña = async function (nuevaPassword) {
  // url webservices
  const url = urlWebServices.actualizarPassword;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('mail', nuevaPassword.mail);
  formData.append('password', nuevaPassword.password);
  // console.log("dato",formData);
  console.log('url', url);

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

        return { rdo: 0, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        alert(data.message);
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    return { rdo: 1, mensaje: error.message };
  }
};

export const recovery = async function (datos) {
  // url webservices
  const url = urlWebServices.recuperarPassword;
  // console.log(url);
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('mail', datos.mail);
  // console.log("dato",formData);
  console.log('url', url);
  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        Accept: 'application/x-www-form-urlencoded',
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
        localStorage.setItem('mailRecovery', datos.mail);

        return { rdo: 0, mensaje: 'Ok' }; // correcto
      }

      default: {
        // otro error
        return { rdo: 1, mensaje: 'Ha ocurrido un error' };
      }
    }
  } catch (error) {
    console.log('error', error);
    return { rdo: 1, mensaje: error.message };
  }
};
