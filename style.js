document.getElementById('ProductoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

const nombre = document.getElementById('nombre').value;
const precio = document.getElementById('precio').value;
const stock = document.getElementById('stock').value;
const marca = document.getElementById('marca').value;
const categoria = document.getElementById('categoria').value;
const descripcionCorta = document.getElementById('descripcionCorta').value;
const descripcionLarga = document.getElementById('descripcionLarga').value;
const envio = document.getElementById('envio').value;
const edadDesde = document.getElementById('edadDesde').value;
const edadHasta = document.getElementById('edadHasta').value;


if (nombre.length < 3 || nombre.length > 50) {
    alert('Nombre debe tener entre 3 y 50 caracteres.');
    return;
    }
if (isNaN(precio) || precio <= 0) {
    alert('Precio debe ser un número válido mayor que 0.');
    return;
    }
if (isNaN(stock) || stock < 0) {
        alert('Stock debe ser un número entero no negativo.');
        return;
    }
if (marca.length < 3 || marca.length > 100) {
        alert('Marca debe tener entre 3 y 100 caracteres.');
        return;
    }
if (categoria.length < 3 || categoria.length > 100) {
        alert('Categoría debe tener entre 3 y 100 caracteres.');
        return;
    }
if (descripcionCorta.length < 10 || descripcionCorta.length > 500) {
        alert('Descripción corta debe tener entre 10 y 500 caracteres.');
        return;
    }
if (descripcionLarga.length < 10 || descripcionLarga.length > 500) {
        alert('Descripción larga debe tener entre 10 y 500 caracteres.');
        return;
    }
if (isNaN(edadDesde) || edadDesde < 1 || edadDesde > 99) {
        alert('Edad desde debe ser un número entre 1 y 99.');
        return;
    }
if (isNaN(edadHasta) || edadHasta < 1 || edadHasta > 99) {
        alert('Edad hasta debe ser un número entre 1 y 99.');
        return;
    }
    

alert('Formulario enviado correctamente');
    this.submit();
});

const form = document.getElementById('ContactoForm');

form.submit = function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comentarios = document.getElementById('comentarios').value;

    if (nombre === '' || email === '' || comentarios === '') {
        alert('Todos los campos son obligatorios.');
        event.preventDefault();
    } 