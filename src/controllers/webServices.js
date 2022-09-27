const urlApi = 'http://localhost:8000/';

console.log('url', urlApi);

const urlWebServices = {
  login: `${urlApi}usuario/loguear`,
  registrarUsuario: `${urlApi}usuario/crear`,
  buscarUsuario: `${urlApi}usuario/buscar`,
  buscarUsuarioPorID: `${urlApi}usuario/buscar/id`,
  actualizarUsuario: `${urlApi}usuario/actualizar`,
  crearHijo: `${urlApi}hijo/crear`,
  buscarHijosPorPadre: `${urlApi}hijo/buscarHijos`,
  actualizarHijo: `${urlApi}hijo/actualizar`,
  buscarHijo: `${urlApi}hijo/buscar/id`,
  crearGrupoSanguineo: `${urlApi}grupoSanguineo/crear`,
  listarGrupoSanguineo: `${urlApi}grupoSanguineo/listar`,
  buscarGrupoSanguineo: `${urlApi}grupoSanguineo/buscar/id`,
  crearVacuna: `${urlApi}vacuna/crear`,
  listarVacuna: `${urlApi}vacuna/listar`,
  buscarVacuna: `${urlApi}vacuna/buscar/id`,
  crearRelacionVacuna: `${urlApi}relacion_vacuna/crear`,
  listarRelacionVacuna: `${urlApi}relacion_vacuna/listar`,
  buscarRelacionVacuna: `${urlApi}relacion_vacuna/buscar/id`,
  eliminarRelacionVacuna: `${urlApi}relacion_vacuna/eliminarVacunacion`,
  actualizarRelacionVacuna: `${urlApi}relacion_vacuna/actualizar`,
  buscarRelacionVacunaPorHijo: `${urlApi}relacion_vacuna/buscarPorHijo/id`,
  crearControlPediatrico: `${urlApi}controlPediatrico/crear`,
  listarControlPediatrico: `${urlApi}controlPediatrico/listar`,
  buscarControlPediatricoPorId: `${urlApi}controlPediatrico/buscar/id`,
  eliminarControlPediatrico: `${urlApi}controlPediatrico/eliminarControl`,
  actualizarControlPediatrico: `${urlApi}controlPediatrico/actualizar`,
  buscarControlPediatricoPorHijo: `${urlApi}controlPediatrico/buscarPorHijo/id`,
  buscarPercentil: `${urlApi}controlPediatrico/percentil`,
  recuperarPassword: `${urlApi}usuario/recuperarPassword`,
  actualizarPassword: `${urlApi}usuario/actualizarPassword`
};

export default urlWebServices;
