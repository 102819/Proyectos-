function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculate() {
    try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
  const imagenes = document.querySelectorAll('.imagen-expandible');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const flechaIzquierda = document.getElementById('flecha-izquierda');
  const flechaDerecha = document.getElementById('flecha-derecha');
  
  let indiceActual = 0;
  
  imagenes.forEach((img, index) => {
    img.addEventListener('click', () => {
      indiceActual = index;
      mostrarModal();
    });
  });
  
  function mostrarModal() {
    modal.classList.remove('hidden');
    modalImg.src = imagenes[indiceActual].src;
  
    flechaIzquierda.style.display = indiceActual === 0 ? 'none' : 'block';
    flechaDerecha.style.display = indiceActual === imagenes.length - 1 ? 'none' : 'block';
  }
  
  function cerrarModal() {
    modal.classList.add('hidden');
  }
  
  function cambiarImagen(direccion) {
    indiceActual += direccion;
  
    if (indiceActual < 0) indiceActual = 0;
    if (indiceActual >= imagenes.length) indiceActual = imagenes.length - 1;
  
    mostrarModal();
  }
  