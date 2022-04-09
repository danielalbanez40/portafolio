/* Funcion anonima autoejecutable para menú mobile*/
/* ------- MENÚ -------- */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn");
    const $Menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click",(e)=>{
      /* Referencio a las barras del menú mobile para que al hacer click intercambie la clase display: none 
        osea que la clase none aparece y desaparece dependiendo del elemento que se pulse */
      $btnMenu.firstElementChild.classList.toggle("none");
      /*Referencio a la X del menú mobile para que al hacer click intercambie la clase display: none
        osea que la clase none aparece y desaparece dependiendo del elemento que se pulse */
      $btnMenu.lastElementChild.classList.toggle("none");

      /* Muestra y oculta los elementos del menú mobile */
      $Menu.classList.toggle("is-active"); 

    });

    //Delegación de eventos (se lo damos al elemento superior, en este caso, el document)
    d.addEventListener("click",(e)=>{
        /* Si el objeto que origina el evento NO es un enlace dentro del menú */
        if (!e.target.matches(".menu a")) return false;
        
        /* Si el objeto que origina el evento SI es un enlace dentro del menú, entonces remueve la clase none
        al boton de menu de tres barras */
        $btnMenu.firstElementChild.classList.remove("none");
        
        /* Si el objeto que origina el evento SI es un enlace dentro del menú, entonces agrega la clase none
        al boton de menu de X */
        $btnMenu.lastElementChild.classList.add("none");
        
        /* Removemos la clase active del menú */
        $Menu.classList.remove("is-active");
    });

})(document);