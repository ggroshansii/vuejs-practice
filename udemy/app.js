

let goalInput = document.querySelector('#goal');
let addGoal = document.querySelector('button');
let goalList = document.querySelector('ul')

addGoal.addEventListener('click', () => {
    let goal = goalInput.value;
    let newLi = document.createElement('li');
    newLi.textContent = goal;
    goalList.append(newLi);
})