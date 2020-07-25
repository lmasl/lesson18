'use strict';

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
  }

let dateStop = ('1').getTime(),
  dateNow = new Date().getTime(),
  timeRemaining = (dateStop - dateNow) / 1000, 

let day,
    date = new Date(),
    weekDay = getWeekDay(date),
    time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(),
    daysBefore;



const write = `<div>Добрый ${day}</div>
                <div>Сегодня: ${weekDay}</div>
                <div>Текущее время:${time} PM</div>
                <div>До нового года осталось ${daysBefore} дней</div>`
document.write(write);