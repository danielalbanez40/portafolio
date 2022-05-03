// Formulario de contacto / Contact Form
//Función anonima autoejecutable
((d) => {
    const $form     = d.querySelector(".contact-form");
    const $loader   = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", e => {
        e.preventDefault();
        $loader.classList.remove("none");
        
        fetch("https://formsubmit.co/ajax/danielalbanez40@gmail.com",{
            method:"POST",
            body: new FormData(e.target) //Especifico la informacion que se envía para serializar los datos y los envíe a la peticion de formsubmit
        })
        .then((res) => res.ok ? res.json(): Promise.reject(res))
        .then((json) => {

            // console.log(json)
            $loader.classList.add("none");
            location.hash = "#gracias"; /*Accede a la url y la modifica agregandole el #gracias */
            $form.reset();
        })
        .catch(err => {

            // console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar los datos, por favor intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`

        }).finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#cose";
            }, 3000);
        });
        

    });


})(document) 