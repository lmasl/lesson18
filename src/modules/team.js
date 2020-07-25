const team = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach((elem) => {
        let src = elem.src;

        elem.addEventListener('mouseenter', (event) => {
           let srcNew = event.target.dataset.img;
           event.target.src = srcNew;
        })
        
        elem.addEventListener('mouseleave', (event) => {
            event.target.src = src;
        })
    });
}; 

team();

