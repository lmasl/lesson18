
  'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('menu'),
            menuItem = menu.querySelectorAll('ul>li'),
            startScrollBtn = document.querySelector('.start-scroll-btn'),
            serviceBlock = document.querySelector('#service-block'),
            portfolio = document.querySelector('#portfolio'),
            calc = document.querySelector('#calc'),
            command = document.querySelector('#command'),
            connect = document.querySelector('#connect');

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
    setInterval(countTimer, 1000, '15 july 2020');

    //меню
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

    //попап
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

    //табы
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


  });
