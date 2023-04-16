const form = document.getElementById('elFormulario');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const comentarioInput = document.querySelector('#comentario');


let contenedor = document.getElementById("contenedor-comentarios");

form.addEventListener('submit', (event) => {

    event.preventDefault();
  
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const comentario = comentarioInput.value;

    const nuevoComentario = {
      nombre,
      email,
      comentario
    };
  

    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    comentarios.push(nuevoComentario);
  

    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    let nuevoSection = document.createElement("section");
    nuevoSection.classList.add("container", "mt-3");
    nuevoSection.innerHTML = `
    <hr class="hr1">
    <hr class="hr2">
    <hr class="hr3">
      <article class="border border-info-subtle p-3 rounded m-3">
        <aside>
          <h6><b>Nombre:</b> ${nombre}</h6>
          <h6><b>E-mail:</b> ${email}</h6>
          <p><b>Comentario:</b> ${comentario}</p>
        </aside>
      </article>
    `;
    contenedor.appendChild(nuevoSection);
  

    nombreInput.value = '';
    emailInput.value = '';
    comentarioInput.value = '';
});


window.addEventListener('load', () => {
  const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
  comentarios.forEach((comentario) => {
    let nuevoSection = document.createElement("section");
    nuevoSection.classList.add("container", "mt-3");
    nuevoSection.innerHTML = `
    <hr class="hr1">
    <hr class="hr2">
    <hr class="hr3">
      <article class="border border-info-subtle p-3 rounded m-3">
        <aside>
          <h6><b>Nombre:</b> ${comentario.nombre}</h6>
          <h6><b>E-mail:</b> ${comentario.email}</h6>
          <p><b>Comentario:</b> ${comentario.comentario}</p>
        </aside>
      </article>
    `;
    contenedor.appendChild(nuevoSection);
  });
});
