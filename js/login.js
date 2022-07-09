const formRegistro = document.getElementById('formularioRegistro');

const dataBaseLogin = [

    {
        email: 'learech@hotmail.com',
        password: '123456'
    }
]

const referencias = [];

formRegistro.addEventListener('submit', (e)=> {

    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('emailRegistro').value;
    const pass = document.getElementById('passwordRegistro').value;


    const datos  = {
        
        nombre, 
        apellido,
        telefono,
        email,
        pass
    }

    referencias.push(datos);

    console.log(referencias);

});

const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('blur', () => {

    if(email.value.length > 0 && email.value.includes('@') && email.value.includes('.')){
        
        console.log("Email correcto");

        const error = document.getElementById('errorEmail');
        error.innerHTML = '<h5 class="text-dark">Campo completo</h5>';

    }else {
        
        console.log("Email incorrect");
        const error = document.getElementById('errorEmail');
        error.innerHTML = '<h5 class="text-danger">El email tiene errores</h5>';
    }
});

password.addEventListener('blur', () => {

    if(password.value.length > 0){
        
        console.log("contraseña correcta");

        const error = document.getElementById('errorPassword');
        error.innerHTML = '<h5 class="text-dark">Campo completo</h5>';

    }else {
        
        console.log("contraseña incorrecta");
        const error = document.getElementById('errorPassword');
        error.innerHTML = '<h5 class="text-danger">Hay errores en la contraseña</h5>';
    }
});

const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === dataBaseLogin[0].email && password === dataBaseLogin[0].password){
        
        console.log("Acceso válido");

        const login = document.getElementById('login');
        login.style.display = 'none';

        const accesoSi = document.getElementById('acceso');
        accesoSi.style.display = 'block';

    }else {
        
        console.log("Acceso inválido");

        const accs = document.getElementById('noacceso');
        accs.style.display = 'block';

        form.reset();
    }
});