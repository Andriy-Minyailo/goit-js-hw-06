const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('Please fill in all fields');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
        event.currentTarget.reset();
    }
}















// function onFormSubmit (event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     console.log(formData);
//     formData.forEach((value, name) => {
//         console.log(name);
//         console.log(value);
//     })
// }