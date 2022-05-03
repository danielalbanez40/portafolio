const d = document;
const ls = localStorage;
/*Creo una función flecha para la programación*/
const darkTheme = (btn, classDark) => {
  /*Obtengo las clases correspondientes y creo el atributo data-dark en mi HTML*/
  const $themeBtn = d.querySelector(btn);
  const $selectors = d.querySelectorAll("[data-dark]");
  let moon = "🌙";
  let sun = "☀️";

  const lightMode = () => {
    //Recorro la lista de elementos o nodos HTML que capturé en la variable $selectors y remuevo la clase de la variable classDark
    $selectors.forEach((el) => el.classList.remove(classDark));
    //Cambio el contenido del boton a la luna
    $themeBtn.textContent = moon;
    //cambio el valor de la variable theme de localStorage dependiendo el modo en que me encuentre
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    //Recorro la lista de elementos o nodos HTML que capturé en la variable $selectors y le agrego la clase de la variable classDark
    $selectors.forEach((el) => el.classList.add(classDark));
    //Cambio el contenido del boton al sol
    $themeBtn.textContent = sun;
    //Cambio el valor de la variable theme de localStorage dependiendo el modo en que me encuentre
    ls.setItem("theme", "dark");
  };

  //Delegación de eventos al DOM
  d.addEventListener("click", (e) => {
    //Detecto el cambio al click en el boton
    if (e.target.matches(btn)) {
      e.preventDefault(); //prevengo comportamiento por defecto para que cada vez que cambie el tema no me lleve a inicio y se quede en la sección que corresponda
      //Ingreso a la propiedad textContent del boton y la comparo con la de la variable moon
      if ($themeBtn.textContent === moon ? darkMode() : lightMode());
    }
  });

  /*Local Storage */
  d.addEventListener("DOMContentLoaded", (e) => {
    //comprueba si existe la variable theme del local Storage y si no la crea
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    //Obtengo el valor de la variable theme y compruebo si su valor es light
    if (ls.getItem("theme") === "light") lightMode();
    //Obtengo el valor de la variable theme y compruebo si su valor es dark
    if (ls.getItem("theme") === "dark") darkMode();
  });
};

export default darkTheme;
