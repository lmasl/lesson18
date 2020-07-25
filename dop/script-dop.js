'use strict';

function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
  }

function getTimeRemaining(deadline){
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000;
        return Math.floor(timeRemaining  / 60 / 60 / 24);
}
let newYear = getTimeRemaining('01 january 2020');

let day,
    date = new Date(),
    greeting,
    weekDay = getWeekDay(date),
    hour = date.getHours() - (date.getHours() >= 12 ? 12 : 0),
    period = date.getHours() >= 12 ? 'PM' : 'AM',
    time = hour + ':'+date.getMinutes()+':'+date.getSeconds() + period;

function getDay(){
  let hour = new Date().getHours();
  let greeting;
      if(hour < 12){
        greeting = "Доброе утро";
      } else if(hour >= 12 && hour < 18){
        greeting = "Добрый день";
      } else if(hour >= 18 && hour < 24) {
        greeting = "Добрый вечер";
      }
      return greeting;
}

const write = `<div> ${getDay()}</div>
                <div>Сегодня:<b>${weekDay}</b> </div>
                <div>Текущее время:<b>${time}</b> </div>
                <div>До нового года осталось <b> ${newYear}</b> дней</div>`
document.write(write);
console.log(window.screen)