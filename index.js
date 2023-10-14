document.getElementById('rotarBtn').addEventListener('click', function() {
    var tarjeta = document.getElementById('tarjeta');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(-180deg)' ? 'rotateY(0deg)' : 'rotateY(-180deg)';
  });