'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('menu'),
            menuItem = menu.querySelectorAll('ul>li');

    //таймер
    const countTimer = (deadline) => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinute = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemainig = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemainig = (dateStop - dateNow) / 1000,
                sec = Math.floor(timeRemainig % 60),
                minutes = Math.floor((timeRemainig / 60) % 60),
                hours = Math.floor(timeRemainig / 60 / 60);

            return { timeRemainig, hours, minutes, sec };
        };

        const updateClock = () => {
            let timer = getTimeRemainig();
            timerHours.textContent = timer.hours >= 10 ? timer.hours : '0' + timer.hours;
            timerMinute.textContent = timer.minutes >= 10 ? timer.minutes : '0' + timer.minutes;
            timerSeconds.textContent = timer.sec >= 10 ? timer.sec : '0' + timer.sec;

            if(timer.timeRemainig <= 0) {
                timerHours.textContent = '00';
                timerMinute.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };
        updateClock();
    };
    setInterval(countTimer, 1000, '25 july 2020');

    //menu
    const toggleMenu = () => {
        const heandlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        document.body.addEventListener('click', (event) => {
            let target = event.target,
                targetBtnMenu = target.closest('.menu'),
                targetCloseMenu = target.closest('.close-btn'),
                targetMenuItem = target.closest('menu>ul>li'),
                targetMenu = target.closest('.active-menu');
            
            if(!targetMenu && !targetBtnMenu && !targetCloseMenu && !targetMenuItem) {
                menu.classList.remove('active-menu');
            }

            if(targetBtnMenu || targetCloseMenu || targetMenuItem) {
                heandlerMenu();
            } 
        });
    };
    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');

        let count = 0;
        let height = popupContent.clientHeight;
            
        const popupAnim = () => {
            count++;
            popup.style.display = 'block';
            popupContent.style.top = count + '%';
            let rafId = requestAnimationFrame(popupAnim);
            if(count >= 30) {
                cancelAnimationFrame(rafId);
            }
        };

        const closePopup = () => {
            count = 0;
            popupContent.style.top = -height + 'px';
            popup.style.display = '';
        };

        popupBtn.forEach( item => {
            item.addEventListener('click', () => {
                if(window.innerWidth > 768) {
                    popupAnim();
                } else {
                    popup.style.display = 'block';
                    popupContent.style.top = '89px';
                }
            });
        });
        popupClose.addEventListener('click', closePopup);

        popup.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.popup-content');
            if(!target) {
                closePopup();
            }
        });
    };
    togglePopup();

    // скролл
    // const scrollPage = () => {
    //     const blocksArray = [serviceBlock, portfolio, calc, command, connect];

    //     const scrollTo = (item) => {
    //         window.scroll({
    //             left: 0,
    //             top: item.offsetTop,
    //             behavior: 'smooth'
    //         });
    //     };
        
        
    //     menuItems.forEach(elem => {
    //       elem.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const block = document.querySelector(elem.querySelector('a')
    //           .getAttribute('href'));
    //         block.scrollIntoView({ behavior: "smooth", block: "start" });
    //         toggleMenu();
    //       });
    //     });

    //     startScrollBtn.addEventListener('click',(event) => {
    //       document.querySelector(scrollbtn.getAttribute('href'))
    //       .scrollIntoView({ behavior: "smooth", block: "start" });    
    //     });
    // };
    // scrollPage();

    //tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
            tabHeader.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.service-header-tab');
                    if(target){
                        tab.forEach((item, i) => {
                            if(item === target){
                               toggleTabContent(i); 
                            }
                        });
                    }
            });
    }
    tabs();

    // slider
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      slider = document.querySelector('.portfolio-content'),
      dots = document.querySelector('.portfolio-dots');

    let dot;

    slide.forEach(() => {
      const newDots = document.createElement('li');
      newDots.classList.add('dot');
      dots.append(newDots);
      dot = document.querySelectorAll('.dot');
      dot[0].classList.add('dot-active');
    });

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', () => {
      event.preventDefault();
      const target = event.target;

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      };
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      };

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide(3000);
      }
    });

    startSlide(3000);

  };

  slider();
  //team
  const commandPhoto = document.querySelectorAll('.command__photo');
   
  commandPhoto.forEach((elem) => {
      let src = elem.src;

      elem.addEventListener('mouseenter', (event) => {
         let srcNew = event.target.dataset.img;
         event.target.src = srcNew
       })
      
       elem.addEventListener('mouseleave', (event) => {
          event.target.src = src;
          console.log(event.target.src);
        })
  });

  //calculator
  let inputsNumber = document.querySelectorAll(".calc-item");
  inputsNumber.forEach((e) => {
      e.addEventListener('input', () => {
      e.value = e.value.replace(/[^\d.]/g, '');
      })
  })

  const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcDay = document.querySelector('.calc-day'),
          calcCount = document.querySelector('.calc-count'),
          totalValue = document.getElementById('total');

      const countSum = () => {
          let total = 0,
          countValue = 1,
          dayValue = 1;
          const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;  
          if(calcCount.value > 1) {
              countValue += (calcCount.value - 1) / 10;
          }

          if(calcDay.value && calcDay.value < 5){
              dayValue *= 2;
          } else if(calcDay.value && calcDay < 10){
              dayValue *= 1.5;
              
          }
          console.log(dayValue)

          if(typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
        } 
        totalValue.textContent = total;
    };

      calcBlock.addEventListener('change', (event) => {
          const target = event.target;

          if(target.matches('select') || target.matches('.calc-square') ||
          target.matches('.calc-day') || target.matches('.calc-count')) {
             countSum();
          }


      })
  }

  calc(100);

// send-ajax-form
let formHeader = document.getElementById('form1'),
formFooter = document.getElementById('form2'),
formModal = document.getElementById('form3');

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
      let body = {};
      
      for(let val of formData.entries()){
          body[val[0]] = val[1];
      }
      statusMessage.textContent = loadMessage;
     
      postData(body).then(() => {
             statusMessage.textContent = successMessage;
         })
         .catch ((error) => {
             statusMessage.textContent = errorMessage;
         })
 });

 const postData = (body) => {
     return new Promise ((resolve, reject) => {
         const request = new XMLHttpRequest();
         request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4) {
                return;
            }
            if (request.status === 200){
               resolve();
            } else {
                reject(request.statusText);
            }
         });
         request.open('POST', './server.php');
         request.setRequestHeader('Conent-Type', 'application/json');
         
         request.send(JSON.stringify(body));
         console.log(body);
         const inputs = document.querySelectorAll('input');
         inputs.forEach((elem) => elem.value = '');
     });
 };
 
};
sendForm(formHeader);
sendForm(formFooter);
sendForm(formModal);


// валидация формы
let formPhone = document.querySelectorAll('.form-phone');
formPhone.forEach((e) => {
    e.addEventListener('input', () => {
    e.value = e.value.replace(/[^0-9+]/, '');
    })
})

let formName = document.querySelectorAll('.form-name');
formName.forEach((e) => {
    e.addEventListener('input', () => {
    e.value = e.value.replace(/[^А-Яа-яЁё ]/, '');
    })
});
let formMessage = document.querySelector('#form2-message')
formMessage.addEventListener('input', () => {
    
    formMessage.value = formMessage.value.replace(/[^А-Яа-яЁё ]/, '');
 })

  

});

