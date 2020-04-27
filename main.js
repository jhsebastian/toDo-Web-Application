(function(){
  //variables
  var lista = document.getElementById("lista")
  var tareaInput = document.getElementById("tareaInput")
  var btnNuevaTarea = document.getElementById("btn-agregar")

  //Funciones
  var agregarTarea = function() {
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement("li");
    var enlace = document.createElement("a");
    var contenido = document.createTextNode(tarea);

    if(tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega una tarea aquí");
      tareaInput.className = "error";
      return false;
    }
    //Agregamos el contenido al tag a
    enlace.appendChild(contenido);
    //Establecer un atributo de tipo href
    enlace.setAttribute("href", "#");
    //Agregar el elemento del tag a al tag li
    nuevaTarea.appendChild(enlace);
    //Agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea)

    tareaInput.value = "";

    for(var i = 0; i <= lista.children.length -1; i++) {
      lista.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
      });
    }
  };
  var comprobarInput = function() {
    tareaInput.className= "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
  };
  var eliminarTarea = function() {
    this.parentNode.removeChild(this);
  };
  //Eventos 
  //Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);
  //Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);
  //Borrando elementos de la lista
  for(var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
}());