const teachers = [
    { name: "李慧倩", gender: 0, classes: 5, subject: 2, times: 18 },
    { name: "许敏", gender: 1, classes: 5, subject: 1, times: 40 },
    { name: "吴纯晨", gender: 1, classes: 5, subject: 2, times: 56 },
    { name: "梅宝君", gender: 1, classes: 3, subject: 1, times: 17 },
    { name: "肖飞", gender: 1, classes: 3, subject: 1, times: 25 },
    { name: "楼文喆", gender: 0, classes: 2, subject: 1, times: 6 },
    { name: "朱成顺", gender: 1, classes: 2, subject: 2, times: 10 },
    { name: "袁福生", gender: 1, classes: 2, subject: 2, times: 3 },
    { name: "崔梦娇", gender: 0, classes: 2, subject: 2, times: 5 },
    { name: "杨婕", gender: 0, classes: 2, subject: 1, times: 4 },
    { name: "方德鑫", gender: 1, classes: 1, subject: 3, times: 4 },
    { name: "王莹", gender: 0, classes: 1, subject: 3, times: 2 },
    { name: "林婧婧", gender:0, classes: 1, subject: 3, times: 3 }
];

const tipName = {"classes": "每周课时总数", "times": "名句出现次数"};
const genderMap = {0: '女', 1: '男'};
const subjectMap = {1: '理科', 2: '文科', 3: '副科'};

const form = document.getElementById("form");
const content = document.getElementById("content");
const results = document.getElementById('results');
const again = document.getElementById('again');
const lifeCount = document.getElementById('lives');
let guessed = [];
let target;
let lives = 3;

function generateTeacher() {
    const list = [...Array(13).keys()];
    for (let i = list.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = list[i];
        list[i] = list[j];
        list[j] = k;
    }
    target = teachers[list[0]];
    const teaName = target['name'];
    const chars = [];
    for (let char of teaName) { chars.push(char.charCodeAt(0)); }
    const token = chars.join('|');
    localStorage.setItem('ttarget', token);
}

function listenClick(e) {
    content.style.display = "block";
    e.stopPropagation();
}

form.addEventListener("click", listenClick);

const divs = content.querySelectorAll('.choice');
divs.forEach(div => {
    div.addEventListener('click', function() {
        const teaName = this.textContent.trim();
        if(!guessed.includes(teaName)) {
            createBlock(teaName);
            if (teaName == target['name']) {win();}
            else {
                guessed.push(teaName);
                localStorage.setItem('csh_guessed', JSON.stringify(guessed));
                content.style.display = "none";
                lives -= 1;
                lifeCount.textContent = `剩余机会：${lives}`;
                if (lives === 0) {lose();}
            }
        } else {
            warning(`已经填过${this.textContent.trim()}了`);
        }
    });
});

again.addEventListener('click', function(){
    guessed = [];
    lives = 3;
    lifeCount.style.color = 'black';
    lifeCount.textContent = `剩余机会：${lives}`;
    results.innerHTML = '';
    generateTeacher();
    form.removeEventListener('click', alertWin);
    form.removeEventListener('click', alertLose);
    form.addEventListener('click', listenClick);
    again.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('ttarget')) {
        const token = localStorage.getItem('ttarget');
        const code = token.split('|');
        const chars = [];
        for (let char of code) { chars.push(String.fromCharCode(char)); }
        const teaName = chars.join('');
        target = findName(teaName);
        const ifGuessed = JSON.parse(localStorage.getItem('csh_guessed'));
        if (ifGuessed) {
            guessed = ifGuessed;
            lives = 3 - guessed.length;
            for (let teaName of guessed) {
                createBlock(teaName);
            }
        }
        lifeCount.textContent = `剩余机会：${lives}`;
    } else {
        lives = 3;
        lifeCount.textContent = `剩余机会：${lives}`;
        generateTeacher();
    }
});

document.addEventListener('click', function(event) {
    if (content.style.display === "block" && !content.contains(event.target)) {
        content.style.display = "none";
    };
});

function alertWin(){warning('已经赢了');}
function alertLose(){warning('已经结束了')}
function clearStorage(){
    localStorage.removeItem('csh_guessed');
    localStorage.removeItem('ttarget');
}

function win() {
    form.removeEventListener('click', listenClick);
    form.addEventListener('click', alertWin);
    content.style.display = "none";
    lifeCount.style.color = '#3CB371';
    lifeCount.textContent = '恭喜你，你猜对了！';
    again.style.display = 'block';
    clearStorage();
}

function lose() {
    form.removeEventListener('click', listenClick);
    form.addEventListener('click', alertLose);
    again.style.display = 'block';
    lifeCount.style.color = '#FF4D4F';
    lifeCount.textContent = '很遗憾，机会用尽了。';
    clearStorage();
}

function findName(name) {
    let info
    for (tea of teachers) {if (tea['name'] == name) {info = tea; break;}}
    return info
}

function createBlock(teaName) {
    const guess = findName(teaName);
    const trys = document.createElement('div');
    trys.className = 'trys';
    const guesses = document.createElement('div');
    guesses.className = 'guesses';
    guesses.textContent = teaName;
    trys.appendChild(guesses);
    const tip = document.createElement('div');
    tip.className = 'tip';
    const h1 = document.createElement('h5');
    const h2 = document.createElement('h5');
    const tip1 = document.createElement('div');
    const tip2 = document.createElement('div');
    const value1 = document.createElement('div');
    const value2 = document.createElement('div');
    h1.textContent = '性别';
    h2.textContent = '教授科目类别';
    tip1.className = 'tips';
    tip2.className = 'tips';
    tip1.appendChild(h1);
    tip2.appendChild(h2);
    value1.textContent = genderMap[guess['gender']];
    value2.textContent = subjectMap[guess['subject']];
    if (guess['gender'] == target['gender']) {tip1.style.backgroundColor = '#3CB371'; tip1.style.color = 'white';}
    if (guess['subject'] == target['subject']) {tip2.style.backgroundColor = '#3CB371'; tip2.style.color = 'white';}
    tip1.append(h1, value1);
    tip2.append(h2, value2);
    tip.append(tip1, tip2);
    const rest = ['classes', 'times'];
    for (key of rest) {
        const tips = document.createElement('div');
        tips.className = 'tips';
        const h = document.createElement('h5');
        h.textContent = tipName[key];
        tips.appendChild(h);
        const value = document.createElement('div');
        value.textContent = guess[key];
        if (guess[key] == target[key]) {
            tips.style.backgroundColor = '#3CB371';
            tips.style.color = 'white';
        } else if (guess[key] > target[key]) {
            value.textContent += ' ⬇️';
        } else {
            value.textContent += ' ⬆️';
        }
        tips.appendChild(value);
        tip.appendChild(tips);
    }
    trys.appendChild(tip);
    results.prepend(trys);
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