document.getElementById('filter-color').addEventListener('change', function () {
  if (this.checked) {
    alert('Filtrado por color');
  }
});

document.getElementById('filter-size').addEventListener('change', function () {
  if (this.checked) {
    alert('Filtrado por tamaño');
  }
});

document.getElementById('filter-price').addEventListener('change', function () {
  if (this.checked) {
    alert('Filtrado por precio');
  }
});
