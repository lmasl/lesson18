const countTimer = (deadline) =>{
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
    function checkTime(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
           }
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000, 
            seconds = Math.floor(timeRemaining % 60),
            secondsZero = checkTime(seconds),
            minutes = Math.floor((timeRemaining / 60) % 60),
            minutesZero = checkTime(minutes),
            hours = Math.floor(timeRemaining / 60 / 60),
            hoursZero = checkTime(hours);
            return {timeRemaining, hoursZero, minutesZero, secondsZero};
    }
    
    const updateCLock = () => {
       let timer = getTimeRemaining();
       
       timerHours.textContent = timer.hoursZero;
      
       timerMinutes.textContent = timer.minutesZero;
       timerSeconds.textContent = timer.secondsZero;
       
       if(timer.timeRemaining > 0){
        setInterval(updateCLock, 1000)
       } else {
       
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
       }   
    }
    updateCLock();
};

countTimer('30 July 2020');