import urlWebServices from './webServices';

export const buscarControlesPorHijo = async function () {
  // url webservices
  const url = urlWebServices.buscarControlPediatricoPorHijo;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('idHijo', localStorage.getItem('idHijo'));

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

    // Promise.resolve(response);

    const rdo = response.status;

    const data = await response.json();

    switch (rdo) {
      case 200: {
        // guardo token
        // guardo usuario logueado

        console.log('data llamada', data);
        const controles = data;
        localStorage.setItem('controles', JSON.stringify(controles));

        return { rdo: 0, controles, mensaje: 'Ok' }; // correcto
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

export const buscarVacunas = async function () {
  // url webservices
  const url = urlWebServices.listarVacuna;
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
      case 201: {
        // guardo token
        // guardo usuario logueado
        const vacunas = data.vacunacion;

        return { rdo: 0, vacunas, mensaje: 'Ok' }; // correcto
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

export const crearVacuna = async function (vacus) {
  // url webservices
  const url = urlWebServices.crearVacuna;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('hijo', localStorage.getItem('hijo'));
  formData.append('vacuna', vacus.vacuna_id);
  formData.append('fecha', vacus.fechaAplicacion);
  formData.append('lugar', vacus.lugar);

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

export const crearControl = async function (control) {
  // url webservices
  const url = urlWebServices.crearControlPediatrico;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('hijo', localStorage.getItem('idHijo'));
  formData.append('fecControl', control.fecControl);
  formData.append('peso', control.peso);
  formData.append('altura', control.altura);
  formData.append('diametroCabeza', control.diametroCabeza);
  formData.append('medicamentos', control.medicamentos);
  formData.append('obsMedicamento', control.obsMedicamento);
  formData.append('estudioMedico', control.estudioMedico);
  formData.append('obsEstudioMedico', control.obsEstudioMedico);
  formData.append('observaciones', control.observaciones);

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

export const buscarRelacionVacunaPorHijo = async function () {
  // url webservices
  const url = urlWebServices.buscarRelacionVacunaPorHijo;
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('idHijo', localStorage.getItem('idHijo'));

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

    Promise.resolve(response);

    const rdo = response.status;

    const data = await response.json();

    switch (rdo) {
      case 200: {
        // guardo token
        // guardo usuario logueado

        const vacun = data;
        localStorage.setItem('listaVacunas', JSON.stringify(vacun));

        return { rdo: 0, vacun, mensaje: 'Ok' }; // correcto
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

export const crearRelacionVacuna = async function (vacus) {
  // url webservices
  const url = urlWebServices.crearRelacionVacuna;
  let dosis;
  if (vacus.dosis === 1) {
    dosis = '1° Dosis';
  } else {
    dosis = '2° Dosis';
  }
  // armo json con datos
  const formData = new URLSearchParams();
  formData.append('hijo', localStorage.getItem('idHijo'));
  formData.append('vacuna', vacus.vacuna);
  formData.append('fecAplicacion', vacus.fecAplicacion);
  formData.append('lugarAplicacion', vacus.lugarAplicacion);
  formData.append('dosis', dosis);

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
