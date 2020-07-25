const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
          closeBtn = document.querySelector('.close-btn'),
          menu = document.querySelector('menu'),
          body = document.querySelector('body');
         
    const handlerMenu = () => {
        menu.classList.add('active-menu');
    };
    const closeMenu = () => {
        menu.classList.remove('active-menu');
    };
    body.addEventListener('click', (e)=> {
        let target = e.target;
        target = target.closest('.menu');
        if(target == btnMenu){
            handlerMenu();
        } else {
            closeMenu();
        } 
     })
};

toggleMenu();