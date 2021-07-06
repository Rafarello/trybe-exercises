function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1


function makeWeekDaysDynamically () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const daysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1){
        const dayNumber = dezDaysList[index];
        const dayNumberListItem = document.createElement('li');
        dayNumberListItem.innerHTML = dayNumber;
            
        if (dayNumber === 24 | dayNumber === 31 ) {
            dayNumberListItem.className = 'day holiday';
        } else if (dayNumber === 4 | dayNumber === 11 | dayNumber === 18){
            dayNumberListItem.className = 'day friday';
        } else if (dayNumber === 25) {
            dayNumberListItem.className = 'day holiday friday';
        } else {
            dayNumberListItem.className = 'day';
        }
        daysList.appendChild(dayNumberListItem);
    }
    
};

makeWeekDaysDynamically();

// Exercício 2

function makeButtonHolidays (holidays) {
    holidays = "Feriados";
    let buttonParent = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonId = 'btn-holiday';

    button.innerText = holidays;
    button.id = buttonId;
    buttonParent.appendChild(button);

};

makeButtonHolidays()

// Exercício 3

/* function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = 'white';
        }
      }
    })
  };
  
  displayHolidays(); */

function changeHolidayColor() {
    let holidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';

    holidayButton.addEventListener('click', function() {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === 'white'){
                getHolidays[index].style.backgroundColor = backgroundColor
            } else {
                getHolidays[index].style.backgroundColor = 'white'
            }
        }
    })
};

changeHolidayColor();