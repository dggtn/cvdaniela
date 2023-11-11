//Cuando el html se carga se invoca esta función
//Esta función chequea si el darkmode esta activado y si es asi agrega la clase dark-mode a todo el sitio-web

//2 funciones distintas que ocurren en momentos distintos 
//cargar modo ocurre cuando el body esta cargado (esta funcion se fija en que el local storage existe guardado un dato con el nombre de dark mode,lo hacemos 
//porque nosotros estamos guardando en el local storage la selección del usuario)
//get item nos puede dar 2 valores. null cuando el usuario todavia no hace click en el boton de darkmode (es decir que como no existe ese valor todavia en el local storage,el resultado es null)
//mientras que true es cuando el usuario pasa de modo claro a oscuro y la función dara false cuando el usuario pasa de ocuro a claro
//Yo elegi darle los valores true o false a ese elemento en el local-storage
//si es distinto de null y me da true se debe cargar el dark-mode

//darkmode ocurre cuando el usuario hace click al boton
//solo se ejecuta cuando el usuario hace click en el botón

function cargarModo() {
   var darkModeSeleccionado = localStorage.getItem('darkMode'); 
   if (darkModeSeleccionado != null && darkModeSeleccionado == 'true') {
      var element = document.body;
      element.classList.add('dark-mode')
   }
}

function darkmode() {
   var element = document.body;
   var darkModeSeleccionado = element.classList.toggle("dark-mode");
   localStorage.setItem('darkMode', darkModeSeleccionado);
}
