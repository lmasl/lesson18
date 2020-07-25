const sendForm = (form) => {
    const errorMessage = "Ошибка",
     loadMessage = "Загрузка...",
     successMessage = "Данные успешно отправлены!",
    
     statusMessage = document.createElement('div');
     statusMessage.style.cssText = 'font-size: 2rem;';
     statusMessage.classList.add('form-text');
     
     form.addEventListener('submit', (event) => {
         event.preventDefault();
         form.appendChild(statusMessage);
         const formData = new FormData(form);
         
         statusMessage.textContent = loadMessage;
        
         postData(formData)
         .then((response) => {
             if (response.status !== 200) {
                 throw new Error('status network not 200');
             }
                statusMessage.textContent = successMessage;
                const inputs = document.querySelectorAll('input');
                inputs.forEach((elem) => elem.value = '');
            })
            .catch ((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            })     
    });

    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Conent-Type': 'application/json'
            },
            body: formData
        });
    };  

    
};
const form1 = document.getElementById('form1');
sendForm(form1);