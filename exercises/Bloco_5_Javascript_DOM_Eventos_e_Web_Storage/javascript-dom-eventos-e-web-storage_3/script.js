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


function makeWeekDaysDynamically() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const daysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dayNumber = dezDaysList[index];
        const dayNumberListItem = document.createElement('li');
        dayNumberListItem.innerHTML = dayNumber;

        if (dayNumber === 24 | dayNumber === 31) {
            dayNumberListItem.className = 'day holiday';
        } else if (dayNumber === 4 | dayNumber === 11 | dayNumber === 18) {
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

function makeButtonHolidays(holidays) {
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

function changeHolidayColor() {
    let holidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';

    holidayButton.addEventListener('click', function () {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === 'white') {
                getHolidays[index].style.backgroundColor = backgroundColor
            } else {
                getHolidays[index].style.backgroundColor = 'white'
            }
        }
    })
};

changeHolidayColor();

// Exercicio 4 

function makeFridayButton(sextaFeira) {
    sextaFeira = 'Sexta-feira'
    let buttonParent = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonId = 'btn-friday';

    button.innerText = sextaFeira;
    button.id = buttonId;
    buttonParent.appendChild(button);
}

makeFridayButton();

// Exercício 5

function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

  // Exercicio 6 

  function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();

  // Exercício 7

  function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');

  // Exercício 8 

  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');

  // Exercício 9

  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  // Exercício 10

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

  // Exercício Bônus

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.keyCode === 13 && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();