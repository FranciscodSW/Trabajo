// Variables para los índices de los sliders
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;

function showSlide(index, sliderId) {
    const sliderBox = document.getElementById(sliderId);
    const slides = sliderBox.querySelectorAll('li');
    const totalSlides = slides.length;
    let slideIndex;

    if (sliderId === 'slider1') {
        slideIndex = slideIndex1;
    } else if (sliderId === 'slider2') {
        slideIndex = slideIndex2;
    } else if (sliderId === 'slider3') {
        slideIndex = slideIndex3;
    }

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100; // Calcula el desplazamiento para transformar
    sliderBox.style.transform = `translateX(${offset}%)`;

    if (sliderId === 'slider1') {
        slideIndex1 = slideIndex;
    } else if (sliderId === 'slider2') {
        slideIndex2 = slideIndex;
    } else if (sliderId === 'slider3') {
        slideIndex3 = slideIndex;
    }
}

function changeSlide(direction, sliderNumber) {
    const sliderId = sliderNumber === 1 ? 'slider1' : (sliderNumber === 2 ? 'slider2' : 'slider3');
    const slideIndex = sliderNumber === 1 ? slideIndex1 : (sliderNumber === 2 ? slideIndex2 : slideIndex3);
    showSlide(slideIndex + direction, sliderId);
}

// Inicializa todos los sliders
showSlide(slideIndex1, 'slider1');
showSlide(slideIndex2, 'slider2');
showSlide(slideIndex3, 'slider3');

document.getElementById('form-unete').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellidoPaterno = document.getElementById('apellido-paterno').value;
    var apellidoMaterno = document.getElementById('apellido-materno').value;
    var telefono = document.getElementById('telefono').value;
    var cv = document.getElementById('cv').value;
    
    // Validación del nombre
    nombre = nombre.toLowerCase().replace(/\b\w/g, function(l) {
        return l.toUpperCase();
    });

    // Validación del apellido paterno y materno
    apellidoPaterno = apellidoPaterno.charAt(0).toUpperCase() + apellidoPaterno.slice(1).toLowerCase();
    apellidoMaterno = apellidoMaterno.charAt(0).toUpperCase() + apellidoMaterno.slice(1).toLowerCase();

    if (!/^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+(?: [A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+)*$/.test(nombre)) {
        alert('Formato de nombre incorrecto');
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+$/.test(apellidoPaterno) || !/^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+$/.test(apellidoMaterno)) {
        alert('Formato de apellido incorrecto');
        return;
    }

    // Validación del número de teléfono
    if (!/^[0-9]{10}$/.test(telefono)) {
        alert('Formato de número de teléfono incorrecto');
        return;
    }

    // Validación del archivo CV
    var fileInput = document.getElementById('cv');
    var cvFile = fileInput.files[0];
    if (!cvFile) {
        alert('Por favor, sube tu CV');
        return;
    }
    var fileName = cvFile.name;
    var fileExtension = fileName.split('.').pop().toLowerCase();
    if (fileExtension !== 'pdf') {
        alert('El CV debe estar en formato PDF');
        return;
    }

    // Si pasa todas las validaciones, puedes enviar el formulario
    alert('Formulario enviado');
    document.getElementById('nombre').value = '';
    document.getElementById('apellido-paterno').value = '';
    document.getElementById('apellido-materno').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('cv').value = '';
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


