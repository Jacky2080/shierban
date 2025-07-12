const students = [
    {id: 1201, name: "陈卓冉", strokes: 20, major: false, minor: false, concert: true, top: false, monitor: false, row: 1, unique: false, grid: 0},
    {id: 1202, name: "崔宇澜", strokes: 32, major: false, minor: false, concert: false, top: false, monitor: false, row: 1, unique: false, grid: 0},
    {id: 1203, name: "方萱沂", strokes: 23, major: false, minor: false, concert: true, top: false, monitor: false, row: 1, unique: false, grid: 0},
    {id: 1204, name: "冯一诺", strokes: 16, major: true, minor: false, concert: true, top: false, monitor: false, row: 2, unique: true, grid: 0},
    {id: 1205, name: "郭芸昕", strokes: 25, major: false, minor: true, concert: false, top: false, monitor: false, row: 2, unique: true, grid: 0},
    {id: 1206, name: "李欣霖", strokes: 31, major: true, minor: false, concert: true, top: false, monitor: false, row: 1, unique: false, grid: 0},
    {id: 1207, name: "吕匡", strokes: 12, major: false, minor: false, concert: false, top: false, monitor: true, row: 1, unique: true, grid: 0},
    {id: 1208, name: "杨雨时", strokes: 22, major: false, minor: false, concert: false, top: true, monitor: false, row: 1, unique: false, grid: 0},
    {id: 1209, name: "殷康宁", strokes: 26, major: false, minor: true, concert: false, top: false, monitor: false, row: 2, unique: true, grid: 0},
    {id: 1210, name: "周世媛", strokes: 25, major: true, minor: false, concert: false, top: false, monitor: false, row: 1, unique: false, grid: 0},
    {id: 1211, name: "朱安琪", strokes: 24, major: false, minor: true, concert: true, top: true, monitor: true, row: 2, unique: false, grid: 0},
    {id: 1212, name: "陈子天", strokes: 14, major: false, minor: false, concert: true, top: false, monitor: false, row: 5, unique: false, grid: 0},
    {id: 1213, name: "仇煦丞", strokes: 23, major: false, minor: true, concert: false, top: false, monitor: false, row: 3, unique: true, grid: 0},
    {id: 1214, name: "方时逸", strokes: 22, major: true, minor: false, concert: true, top: true, monitor: false, row: 3, unique: false, grid: 0},
    {id: 1215, name: "丰文凯", strokes: 16, major: false, minor: false, concert: false, top: false, monitor: false, row: 3, unique: true, grid: 0},
    {id: 1216, name: "黄俊哲", strokes: 30, major: false, minor: false, concert: true, top: false, monitor: false, row: 2, unique: false, grid: 0},
    {id: 1217, name: "黄云博", strokes: 27, major: false, minor: false, concert: false, top: false, monitor: false, row: 4, unique: false, grid: 0},
    {id: 1218, name: "金炜熠", strokes: 31, major: false, minor: false, concert: false, top: false, monitor: false, row: 2, unique: true, grid: 0},
    {id: 1219, name: "黎益均", strokes: 32, major: false, minor: false, concert: false, top: false, monitor: false, row: 4, unique: true, grid: 0},
    {id: 1220, name: "李家贝", strokes: 21, major: false, minor: false, concert: false, top: false, monitor: false, row: 5, unique: false, grid: 0},
    {id: 1221, name: "李王徵瑜", strokes: 39, major: false, minor: true, concert: true, top: false, monitor: false, row: 5, unique: false, grid: 0},
    {id: 1222, name: "林沛远", strokes: 22, major: false, minor: false, concert: false, top: false, monitor: false, row: 3, unique: false, grid: 0},
    {id: 1223, name: "林修齐", strokes: 23, major: true, minor: false, concert: true, top: true, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1224, name: "刘怿禛", strokes: 28, major: false, minor: true, concert: false, top: false, monitor: false, row: 5, unique: true, grid: 0},
    {id: 1225, name: "茅谦行", strokes: 26, major: false, minor: false, concert: false, top: false, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1226, name: "茅肇中", strokes: 26, major: false, minor: true, concert: false, top: false, monitor: true, row: 4, unique: false, grid: 0},
    {id: 1227, name: "皮桓宇", strokes: 21, major: true, minor: false, concert: true, top: false, monitor: false, row: 5, unique: false, grid: 0},
    {id: 1228, name: "钱霖枫", strokes: 34, major: false, minor: true, concert: false, top: true, monitor: true, row: 3, unique: false, grid: 0},
    {id: 1229, name: "瞿逸程", strokes: 41, major: true, minor: false, concert: false, top: false, monitor: true, row: 3, unique: false, grid: 0},
    {id: 1230, name: "桑烨鑫", strokes: NaN, major: false, minor: false, concert: false, top: false, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1231, name: "石昊洲", strokes: NaN, major: false, minor: false, concert: false, top: false, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1232, name: "万仲杰", strokes: 17, major: false, minor: false, concert: true, top: false, monitor: false, row: 4, unique: true, grid: 0},
    {id: 1233, name: "王元衡", strokes: 24, major: false, minor: true, concert: false, top: false, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1234, name: "王哲浩", strokes: 24, major: false, minor: true, concert: false, top: false, monitor: false, row: 4, unique: false, grid: 0},
    {id: 1235, name: "徐子墨", strokes: 28, major: false, minor: false, concert: false, top: false, monitor: false, row: 5, unique: false, grid: 0},
    {id: 1236, name: "徐梓晖", strokes: 31, major: false, minor: false, concert: false, top: false, monitor: false, row: 4, unique: false, grid: 0},
    {id: 1237, name: "薛正懋", strokes: 38, major: false, minor: true, concert: false, top: false, monitor: true, row: 2, unique: true, grid: 0},
    {id: 1238, name: "杨本烨", strokes: 22, major: false, minor: false, concert: false, top: true, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1239, name: "张子凡", strokes: 13, major: false, minor: false, concert: false, top: false, monitor: false, row: 5, unique: false, grid: 0},
    {id: 1240, name: "周宇曦", strokes: 34, major: false, minor: false, concert: false, top: true, monitor: false, row: 6, unique: false, grid: 0},
    {id: 1241, name: "朱云祯", strokes: 20, major: false, minor: false, concert: true, top: false, monitor: false, row: 4, unique: false, grid: 0},
    {id: 1242, name: "朱子铭", strokes: 20, major: false, minor: true, concert: false, top: false, monitor: true, row: 3, unique: false, grid: 0}
];

const s1 = students.filter(s => s.top).map(s => s.name);
const s2 = students.filter(s => s.major).map(s => s.name);
const s3 = students.filter(s => s.minor).map(s => s.name);
const s4 = students.filter(s => s.concert).map(s => s.name);
const s7 = students.filter(s => s.unique).map(s => s.name);
const s8 = students.filter(s => s.strokes >= 32).map(s => s.name);
const s9 = students.filter(s => s.strokes <= 20).map(s => s.name);
const s10 = students.filter(s => s.monitor).map(s => s.name);

const stuStates = ['前四次大考总分均有年级前30', '高一下结束时担任三大门课代表', '担任六小门课代表', '音乐会表演者', null, null, '姓名中所有字在其他任意同学姓名中都不出现', '姓名笔画数≥32', '姓名笔画数≤20', '是值周班长'];

let answers = [];
let lives = 6;
let correct;

const t1 = document.getElementById('top-text1');
const t2 = document.getElementById('top-text2');
const t3 = document.getElementById('top-text3');
const l1 = document.getElementById('left-text1');
const l2 = document.getElementById('left-text2');
const l3 = document.getElementById('left-text3');

function generateQuestions() {
    let posNum = Math.floor(Math.random() * 5) + 1;
    const numbers = [1, 11, 21, 32];
    let stuNum = numbers[Math.floor(Math.random() * 4)];

    stuStates[4] = `学号在[${stuNum},${stuNum + 10}]区间内`;
    stuStates[5] = `坐在第[${posNum},${posNum + 1}]排`;

    const s5 = students.slice(stuNum - 1, stuNum + 9).map(s => s.name);
    const s6 = students.filter(s => s.row === posNum || s.row === posNum + 1).map(s => s.name);
    const s = Array.of(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);    

    let answer = false;
    let states = [];
    while (!answer) {
        const len = [...Array(10).keys()];
        for (let i = len.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = len[i];
            len[i] = len[j];
            len[j] = k;
        }
        states = len.slice(0,6);

        if (hasIntersect(s[states[0]], s[states[3]]) && hasIntersect(s[states[0]], s[states[4]]) && hasIntersect(s[states[0]], s[states[5]]) && hasIntersect(s[states[1]], s[states[3]]) && hasIntersect(s[states[1]], s[states[4]]) && hasIntersect(s[states[1]], s[states[5]]) && hasIntersect(s[states[2]], s[states[3]]) && hasIntersect(s[states[2]], s[states[4]]) && hasIntersect(s[states[2]], s[states[5]])) {
            answers.push(intersect(s[states[0]], s[states[3]]));
            answers.push(intersect(s[states[1]], s[states[3]]));
            answers.push(intersect(s[states[2]], s[states[3]]));
            answers.push(intersect(s[states[0]], s[states[4]]));
            answers.push(intersect(s[states[1]], s[states[4]]));
            answers.push(intersect(s[states[2]], s[states[4]]));
            answers.push(intersect(s[states[0]], s[states[5]]));
            answers.push(intersect(s[states[1]], s[states[5]]));
            answers.push(intersect(s[states[2]], s[states[5]]));
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
    t1.textContent = stuStates[states[0]];
    t2.textContent = stuStates[states[1]];
    t3.textContent = stuStates[states[2]];
    l1.textContent = stuStates[states[3]];
    l2.textContent = stuStates[states[4]];
    l3.textContent = stuStates[states[5]];

    correct = [...Array(9)].map(() => false);
    localStorage.setItem('ts9_lives', 6);
    localStorage.setItem('ts9_correct', JSON.stringify(correct));
    localStorage.setItem('ts9_questions', JSON.stringify({
        'posNum': posNum,
        'stuNum': stuNum,
        'states': states
    }))
}

function hasIntersect(arr1, arr2) {
  return Boolean(arr1.some(name => arr2.includes(name)))
}

function intersect(arr1, arr2) {
    return arr1.filter(name => arr2.includes(name))
}

document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('ts9_questions')) {
        const questions = JSON.parse(localStorage.getItem('ts9_questions'));
        const stuNum = questions['stuNum'];
        const posNum = questions['posNum'];
        const states = questions['states'];
        stuStates[4] = `学号在[${stuNum},${stuNum + 10}]区间内`;
        stuStates[5] = `坐在第[${posNum},${posNum + 1}]排`;
        const s5 = students.slice(stuNum - 1, stuNum + 9).map(s => s.name);
        const s6 = students.filter(s => s.row === posNum || s.row === posNum + 1).map(s => s.name);
        const s = Array.of(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);
        answers.push(intersect(s[states[0]], s[states[3]]));
        answers.push(intersect(s[states[1]], s[states[3]]));
        answers.push(intersect(s[states[2]], s[states[3]]));
        answers.push(intersect(s[states[0]], s[states[4]]));
        answers.push(intersect(s[states[1]], s[states[4]]));
        answers.push(intersect(s[states[2]], s[states[4]]));
        answers.push(intersect(s[states[0]], s[states[5]]));
        answers.push(intersect(s[states[1]], s[states[5]]));
        answers.push(intersect(s[states[2]], s[states[5]]));

        t1.textContent = stuStates[states[0]];
        t2.textContent = stuStates[states[1]];
        t3.textContent = stuStates[states[2]];
        l1.textContent = stuStates[states[3]];
        l2.textContent = stuStates[states[4]];
        l3.textContent = stuStates[states[5]];
        for (let i = 0; i < 9; i++) {
            let grid = localStorage.getItem(`s9grid${i + 1}`);
            if (grid) {
                lock = document.getElementById(`grid${i + 1}`);
                lock.textContent = grid;
                students[Number(lock.textContent.trim().slice(2, 4)) - 1]['grid'] = lock.id;
            }
        }
        lives = localStorage.getItem('ts9_lives');
        lifeCount.textContent = `剩余机会：${lives}`;
        correct = JSON.parse(localStorage.getItem('ts9_correct'));
    } else {
        generateQuestions();
        lifeCount.textContent = `剩余机会：${lives}`;
    }
});

const layout = document.getElementById("layout");
const grids = document.querySelectorAll('.grid');
const content = document.getElementById('content');
const lifeCount = document.getElementById('lives');
const again = document.getElementById('again');
let currentGrid = null;

again.addEventListener('click', function() {
    answers = [];
    lives = 6;
    lifeCount.textContent = `剩余机会：${lives}`;
    correct = [false, false, false, false];
    grids.forEach(function(grid) {if(grid.textContent){students[Number(grid.textContent.trim().slice(2, 4)) - 1]['grid'] = 0;grid.textContent = '';}});
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
        nameIndex = Number(this.textContent.trim().slice(2, 4)) - 1;
        stuName = students[nameIndex]['name'];
        let value = students[nameIndex]['grid'];
        gridId = currentGrid.id.slice(-1);
        if(!Boolean(value) || value === currentGrid.id) {
            if (answers[gridId - 1].includes(stuName)) {
                if (this.textContent != currentGrid.textContent && currentGrid.textContent) {
                    students[Number(currentGrid.textContent.trim().slice(2, 4)) - 1]['grid'] = 0;
                }
                currentGrid.textContent = this.textContent;
                students[nameIndex]['grid'] = currentGrid.id;
                correct[gridId - 1] = true;
                localStorage.setItem(`s9${currentGrid.id}`, this.textContent.trim());
                localStorage.setItem('ts9_correct', JSON.stringify(correct));
                currentGrid = null;
                closeLayout();
            } else {
                lives -= 1;
                lifeCount.textContent = `剩余机会：${lives}`;
                localStorage.setItem('ts9_lives', lives);
                warning('错误');
            }
        } else {
            warning(`已经填过${this.textContent.trim().slice(4)}了`);
        }
        if (lives === 0) {
            closeLayout();
            lifeCount.style.color = '#FF4D4F';
            lifeCount.textContent = '很遗憾，6次机会用尽了。';
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
    localStorage.removeItem('ts9_lives');
    localStorage.removeItem('ts9_correct');
    localStorage.removeItem('ts9_questions');
    localStorage.removeItem('s9grid1');
    localStorage.removeItem('s9grid2');
    localStorage.removeItem('s9grid3');
    localStorage.removeItem('s9grid4');
    localStorage.removeItem('s9grid5');
    localStorage.removeItem('s9grid6');
    localStorage.removeItem('s9grid7');
    localStorage.removeItem('s9grid8');
    localStorage.removeItem('s9grid9');
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