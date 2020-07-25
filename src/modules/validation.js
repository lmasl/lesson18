const validation = () => {
    let formPhone = document.querySelectorAll('.form-phone');
    formPhone.forEach((e) => {
        e.addEventListener('input', () => {
        e.value = e.value.replace(/[^0-9+]/, '');
        })
    })

    let formName = document.querySelectorAll('.form-name'),
        formMessage = document.querySelector('#form2-message');
    formName.forEach((e) => {
        e.addEventListener('input', () => {
        e.value = e.value.replace(/[^А-Яа-яЁё ]/, '');
        })
    });
    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/[^А-Яа-яЁё ]/, '');
     });
    
};

validation();