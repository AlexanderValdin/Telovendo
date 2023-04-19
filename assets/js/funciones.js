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
    
    // Devolver true si todos los campos están llenos
    return (nombre !== '' && email !== '' && mensaje !== '');
    //(mensaje === '' || email === '' || mensaje === '') ? false: true;
    
}

document.addEventListener('submit', function(e){
    e.preventDefault();

    if (validacionFormulario()) {
        const formulario = document.getElementById('form');
        formulario.submit();
        alert('formulario submitted');
        document.getElementsByTagName(input).classList.remove('invalid');
    }

})


