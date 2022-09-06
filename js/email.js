const d = document;
const btn = d.getElementById('btn-contact-form');

d.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'ENVIANDO...';

  const serviceID = 'default_service';
  const templateID = 'template_jcz5kh8';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'ENVIAR MENSAJE';
      //   alert('Sent!');
      Swal.fire({
          icon: 'success',
          title: `Muchas Gracias!`,
          text: 'He recibido tu email y me voy a contactar con vos lo antes posible!',
        });
        d.getElementById('contact-form').reset();
    },
    (err) => {
      btn.value = 'ENVIAR MENSAJE';
      Swal.fire({
        icon: 'error',
        title: `Error ${JSON.stringify(err)}`,
        text: 'No pudimos enviar el email',
      });
      //   alert(JSON.stringify(err));
    },
  );
});
