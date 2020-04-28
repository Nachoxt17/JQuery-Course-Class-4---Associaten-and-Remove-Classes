 /** ASOCIACIÓN Y BORRADO DE CLASES:_
  * +-Sirve para Asignarle a un Elemento HTML una Clase de CSS que en el Momento no Tiene, por lo tanto cambiaríamos sus Estilos. En el Siguiente Ejemplo Mostraremos cómo Agregarle y Quitarle la Clase CSS
  *  ".paragraph" al Elemento <p> apretando Botones; usando JQuery.
  * +-Para Asociar una Clase usamos el Método JQuery ".addClass('*Class to Add*')" y para Borrarla usamos el Método JQuery ".removeClass('*Class to Remove*')".*/

$("#button2").click(() => $("#p1").addClass('paragraph'));

$("#button3").click(() => $("#p1").removeClass('paragraph'));

/** REEMPLAZAR HTML CON JQUERY:_
 * +-En este Ejemplo vamos a usar JQuery para Agregar/Editar/Reemplazar Código y Contenido HTML, en este Ejemplo Reemplazando el Elemento <div id="c1"> que está dentro del Elemento <div id="parent">.
 * *-Para Lograr eso, Llamamos con JQuery al Botón "#button4" para que al Hacerle Click le Apliquemos al Elemento <div id="parent"> el Método ".html(***) dónde Los "***" Representan el Contenido por el que se va a
 *  Reemplazar lo que sea haya estado antes.*/

$("#button4").click(() => $('#parent1').html('<div id="c1">Bye Bye World!.</div>'));