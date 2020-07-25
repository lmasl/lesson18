'use strict';

import calc from './modules/calc.js';
import countTimer from './modules/countTimer.js';
import sendForm from './modules/sendForm.js';
import slider from './modules/slider.js';
import sliders from './modules/sliders.js';
import tabs from './modules/tabs.js';
import team from './modules/team.js';
import toggleMenu from './modules/toggleMenu.js';
import togglePopup from './modules/togglePopup.js';
import validation from './modules/validation.js';

    //timer
    countTimer('30 July 2020');
    
    //menu
    toggleMenu();

    //popup
    togglePopup();

    //tabs
    tabs();

    //slider
    slider();
    
   //slider
   sliders();
   
    //team
    team();

    //calculator
    calc(100);
        
    //send ajax-form
    let formHeader = document.getElementById('form1'),
       formFooter = document.getElementById('form2'),
       formModal = document.getElementById('form3');
    sendForm(formHeader);
    sendForm(formFooter);
    sendForm(formModal);

    //validation
    validation();
    