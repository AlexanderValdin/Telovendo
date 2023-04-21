$(document).ready(function () {

    // Carrusel 

    $('#productos .row:first-of-type').addClass('d-flex').removeClass('d-none');

    let interval = setInterval(function () {
        const active = $('#productos .row.d-flex');
        const next = (active.next().length > 0) ? active.next() : $('#productos .row:first-of-type');
        active.removeClass('d-flex').addClass('d-none');
        next.addClass('d-flex').removeClass('d-none');
    }, 3000);
    if ($(window).width() < 576) {
        clearInterval(interval);
        $('#productos .row:first-of-type').addClass('d-flex');
        $('#productos .row:first-of-type .col-sm-4').addClass('col-xs-12');
    }

    $(window).resize(function () {
        if ($(window).width() < 576) {
            clearInterval(interval);
            $('#productos .row:first-of-type').addClass('d-flex');
            $('#productos .row:first-of-type .col-sm-4').addClass('col-xs-12');
        } else {
            interval = setInterval(function () {
                const active = $('#productos .row.d-flex');
                const next = (active.next().length > 0) ? active.next() : $('#productos .row:first-of-type');
                active.removeClass('d-flex').addClass('d-none');
                next.addClass('d-flex').removeClass('d-none');
                $('#productos .row:first-of-type').removeClass('d-flex');
                $('#productos .row:first-of-type .col-sm-4').removeClass('col-xs-12');
            }, 3000)
        }
    });
    // Fin Carrusel

    // Data Table
    $('#inventario').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        pageLength: 3
    });
    $('.dataTables_filter input').addClass('form-control');
    $('.dataTables_paginate .pagination').addClass('pagination');
    // Fin Data Table
});

function validacionFormulario() {

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '') {
        //console.log('No ha ingresado su nombre');
        document.querySelector('.nombre').classList.add('invalid');
    }

    if (email === '') {
        //console.log('No ha ingresado un email');
        document.querySelector('.email').classList.add('invalid');
    }

    if (mensaje === '') {
        //console.log('No ha ingresado un mensaje');
        document.querySelector('.mensaje').classList.add('invalid');
    }
    return (nombre !== '' && email !== '' && mensaje !== '');
    //(mensaje === '' || email === '' || mensaje === '') ? false: true;

}

document.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validacionFormulario()) {
        const formulario = document.getElementById('form');
        alert('formulario submitted');
        formulario.submit();
    } else {
        const inputs = document.querySelectorAll('.input');
        inputs.forEach(input => {
            input.addEventListener('input', function () {
                input.classList.remove('invalid');
            });
        });
    }
}
);



