const teachers = [
    {name: "李慧倩", gender: 0, science: false, not: true, final: false, class: [1, 2, 3, 4, 5], grid: 0},
    {name: "许敏", gender: 1, science: true, not: true, final: true, class: [1, 2, 3, 4, 5], grid: 0},
    {name: "吴纯晨", gender: 1, science: false, not: true, final: true, class: [1, 2, 3, 4, 5], grid: 0},
    {name: "梅宝君", gender: 1, science: true, not: false, final: true, class: [1, 3, 5], grid: 0},
    {name: "肖飞", gender: 1, science: true, not: true, final: false, class: [2, 3, 4], grid: 0},
    {name: "楼文喆", gender: 0, science: true, not: false, final: true, class: [2, 4], grid: 0},
    {name: "朱成顺", gender: 1, science: false, not: true, final: true, class: [1, 4], grid: 0},
    {name: "袁福生", gender: 1, science: false, not: true, final: false, class: [3, 5], grid: 0},
    {name: "崔梦娇", gender: 0, science: false, not: true, final: false, class: [2, 3], grid: 0},
    {name: "杨婕", gender: 0, science: true, not: false, final: false, class: [1, 3], grid: 0},
    {name: "方德鑫", gender: 1, science: true, not: false, final: false, class: [2], grid: 0},
    {name: "王莹", gender: 0, science: false, not: false, final: false, class: [1], grid: 0},
    {name: "林婧婧", gender: 0, science: false, not: false, final: false, class: [5], grid: 0}
]

const gridHold = {'grid1': null, 'grid2': null, "grid3": null, "grid4": null};
const s1 = teachers.filter(t => t.gender == 1).map(t => t.name);
const s2 = teachers.filter(t => t.gender == 0).map(t => t.name);
const s3 = teachers.filter(t => t.science).map(t => t.name);
const s4 = teachers.filter(t => t.not).map(t => t.name);
const s5 = teachers.filter(t => t.final).map(t => t.name);

const teaStates = ["男性教师", "女性教师", "教授理科/工科(不含音乐/心理)", "至多两节12班的课不在A206上", "两次期末考后返校均讲卷子", null, null]

let answers = [];
let lives = 2;
let correct = [false, false, false, false];

const t1 = document.getElementById('top-text1');
const t2 = document.getElementById('top-text2');
const l1 = document.getElementById('left-text1');
const l2 = document.getElementById('left-text2');

function generateQuestions() {
    let day1 = Math.floor(Math.random() * 5) + 1;
    let day2 = Math.floor(Math.random() * 5) + 1;

    teaStates[5] = `周${day1}有课`;
    teaStates[6] = `周${day2}没课`;

    const s6 = teachers.filter(t => t.class.includes(day1)).map(t => t.name);
    const s7 = teachers.filter(t => !t.class.includes(day1)).map(t => t.name);
    const s = Array.of(s1, s2, s3, s4, s5, s6, s7);    

    let answer = false;
    let states = [];
    while (!answer) {
        const len = [...Array(7).keys()];
        for (let i = len.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = len[i];
            len[i] = len[j];
            len[j] = k;
        }
        states = len.slice(0,4);

        if (hasIntersect(s[states[0]], s[states[2]]) && hasIntersect(s[states[0]], s[states[3]]) && hasIntersect(s[states[1]], s[states[2]]) && hasIntersect(s[states[1]], s[states[3]])) {
            answers.push(intersect(s[states[0]], s[states[2]]));
            answers.push(intersect(s[states[1]], s[states[2]]));
            answers.push(intersect(s[states[0]], s[states[3]]));
            answers.push(intersect(s[states[1]], s[states[3]]));
            let hasDuplicate = false;
            outer: for (let i = 0; i < 3; i++) {
                for (let j = i + 1; j < 4; j++) {
                if (answers[i].length === answers[j].length &&
                    answers[i].every((stu, index) => stu === answers[j][index])) {
                    hasDuplicate = true;
                    break outer;
                }
                }
            }
            if (!hasDuplicate) {answer = true;}
        }   
    }
    t1.textContent = teaStates[states[0]];
    t2.textContent = teaStates[states[1]];
    l1.textContent = teaStates[states[2]];
    l2.textContent = teaStates[states[3]];

    correct = [false, false, false, false];
    localStorage.setItem('tsh_lives', 3);
    localStorage.setItem('tsh_correct', JSON.stringify(correct));
    localStorage.setItem('tsh_questions', JSON.stringify({
        'day1': day1,
        'day2': day2,
        'states': states
    }))
    console.log(answers);
}

function hasIntersect(arr1, arr2) {
  return Boolean(arr1.some(name => arr2.includes(name)))
}

function intersect(arr1, arr2) {
    return arr1.filter(name => arr2.includes(name))
}

document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('tsh_questions')) {
        const questions = JSON.parse(localStorage.getItem('tsh_questions'));
        const day1 = questions['day1'];
        const day2 = questions['day2'];
        const states = questions['states'];
        teaStates[5] = `周${day1}有课`;
        teaStates[6] = `周${day2}没课`;
        const s6 = teachers.filter(t => t.class.includes(day1)).map(t => t.name);
        const s7 = teachers.filter(t => !t.class.includes(day1)).map(t => t.name);
        const s = Array.of(s1, s2, s3, s4, s5, s6, s7); 
        answers.push(intersect(s[states[0]], s[states[2]]));
        answers.push(intersect(s[states[1]], s[states[2]]));
        answers.push(intersect(s[states[0]], s[states[3]]));
        answers.push(intersect(s[states[1]], s[states[3]]));

        t1.textContent = teaStates[states[0]];
        t2.textContent = teaStates[states[1]];
        l1.textContent = teaStates[states[2]];
        l2.textContent = teaStates[states[3]];
        for (let i = 0; i < 4; i++) {
            let grid = localStorage.getItem(`tgrid${i + 1}`);
            if (grid) {
                lock = document.getElementById(`grid${i + 1}`);
                lock.textContent = grid;
                gridHold[lock.id] = grid;
            }
        }
        lives = localStorage.getItem('tsh_lives');
        lifeCount.textContent = `剩余机会：${lives}`;
        correct = JSON.parse(localStorage.getItem('tsh_correct'));
    } else {
        generateQuestions();
        lifeCount.textContent = `剩余机会：${lives}`;
    }
    console.log(answers)
});

const layout = document.getElementById("layout");
const grids = document.querySelectorAll('.grid');
const content = document.getElementById('content');
const lifeCount = document.getElementById('lives');
const again = document.getElementById('again');
let currentGrid = null;

again.addEventListener('click', function() {
    answers = [];
    lives = 2;
    lifeCount.textContent = `剩余机会：${lives}`;
    correct = [false, false, false, false];
    grids.forEach(function(grid) {if(grid.textContent){gridHold[grid.id] = 0;grid.textContent = '';}});
    lifeCount.style.color = 'black';
    grids.forEach(grid => {
        grid.removeEventListener('click', alertWin);
        grid.removeEventListener('click', alertLose);
        grid.addEventListener('click', listenClick);
    });
    again.style.display = 'none';
    generateQuestions();
})

function listenClick() {
    layout.style.display = "flex";
    document.body.style.overflow = "hidden";
    currentGrid = this;
}

function alertWin() {warning('已经赢了');}
function alertLose() {warning('已经结束了');}

grids.forEach(grid => {
    grid.addEventListener('click', listenClick);
});

const divs = content.querySelectorAll('.choice');
divs.forEach(div => {
    div.addEventListener('click', function() {
        let teaName = this.textContent.trim(); 
        let gridValue = gridHold[currentGrid.id]
        gridId = currentGrid.id.slice(-1);
        if(!Object.values(gridHold).includes(teaName) || gridValue == teaName) {
            if (answers[gridId - 1].includes(teaName)) {
                if (this.textContent != currentGrid.textContent && currentGrid.textContent) {
                    gridHold[currentGrid.id] = 0;
                }
                currentGrid.textContent = this.textContent;
                gridHold[currentGrid.id] = teaName;
                correct[gridId - 1] = true;
                localStorage.setItem(`t${currentGrid.id}`, teaName);
                localStorage.setItem('tsh_correct', JSON.stringify(correct));
                currentGrid = null;
                closeLayout();
            } else {
                lives -= 1;
                lifeCount.textContent = `剩余机会：${lives}`;
                localStorage.setItem('tsh_lives', lives);
                warning('错误');
            }
        } else {
            warning(`已经填过${this.textContent.trim()}了`);
        }
        if (lives === 0) {
            closeLayout();
            lifeCount.style.color = '#FF4D4F';
            lifeCount.textContent = '很遗憾，3次机会用尽了。';
            again.style.display = 'block';
            grids.forEach(grid => {
                grid.removeEventListener('click', listenClick);
                grid.addEventListener('click', alertLose);
            });
            clearStorage();
        }
        if (correct.every((bool) => bool)) {
            again.style.display = 'block';
            lifeCount.style.color = '#008000';
            lifeCount.textContent = '恭喜你，你填对了！';
            grids.forEach(grid => {
                grid.removeEventListener('click', listenClick);
                grid.addEventListener('click', alertWin);
            });
            clearStorage();
        }
    });
});

function clearStorage() {
    localStorage.removeItem('tsh_lives');
    localStorage.removeItem('tsh_correct');
    localStorage.removeItem('tsh_questions');
    localStorage.removeItem('tgrid1');
    localStorage.removeItem('tgrid2');
    localStorage.removeItem('tgrid3');
    localStorage.removeItem('tgrid4');
}

function closeLayout() {
    layout.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
}

let alertQueue = [];
let margin = 10;

function warning(text) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `<span class="alert-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="16px" height="16px" fill="#FAAD14" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg></span><span class="alert-content">${text}</span>`;
    document.body.appendChild(alertBox);

    const prevAlert = alertQueue[alertQueue.length - 1];
    const top = prevAlert ? prevAlert.getBoundingClientRect().bottom + margin : 20;
    alertBox.style.top = `${top}px`;
    alertQueue.push(alertBox);
    setTimeout(() => {
        closeAlertSequentially();
    }, 1000);
}

async function closeAlertSequentially() {
  while (alertQueue.length > 0) {
    const currentAlert = alertQueue[0];
    await moveAlertsUp();
    await fadeOutAlert(currentAlert);
    alertQueue.shift();
    currentAlert.remove();
  }
}

function moveAlertsUp() {
  return new Promise(resolve => {
    alertQueue.forEach((box, i) => {
      const newTop = i === 0 ? 20 : alertQueue[i - 1].getBoundingClientRect().bottom + margin;
      box.style.top = `${newTop}px`;
    });
    setTimeout(resolve, 300);
  });
}

function fadeOutAlert(alertBox) {
  return new Promise(resolve => {
    alertBox.style.opacity = '0';
    alertBox.addEventListener('transitionend', () => resolve(), { once: true });
  });
}