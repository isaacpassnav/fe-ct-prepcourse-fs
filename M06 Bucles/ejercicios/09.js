function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
}

var estadoDeUsuario = conection();
for(var i=0; i== estadoDeUsuario; i++){
  if(estadoDeUsuario===1){
    return "Online";
  }
  else if(estadoDeUsuario===2){
    return "Away";
  }else{
    return "Offline";
  }
  }

module.exports = conection;
