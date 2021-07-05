let header = document.querySelector('#header-container');

header.style.backgroundColor = "#2FC18C";

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

for (index in noEmergencyTasks) {
    noEmergencyTasks[index].style.backgroundColor = 'black';
};

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');

for (index in emergencyTasks) {
    emergencyTasks[index].style.color= 'purple';
};

