const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content'),
        popupClose = document.querySelector('.popup-close');
    
    popupContent.style.transition = '1s';
    // popupContent.style.left = '-100%';

    function animation(){
        popupContent.style.left = '38%';
    };
 
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            if(document.documentElement.clientWidth > 576) {
                animation();
            } else {
                popupContent.style.left = '14%';
            }
         
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        popupContent.style.left = '-100%';
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
            popupContent.style.left = '-100%';
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popup.style.display = 'none';
                popupContent.style.left = '-100%';
             }
        }
       
    })
};

togglePopup();


