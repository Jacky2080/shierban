const students = [
    { id: 1201, name: "陈卓冉", row: 1, times: 0, strokes: 20, poses: 1 },
    { id: 1202, name: "崔宇澜", row: 1, times: 0, strokes: 32, poses: 0 },
    { id: 1203, name: "方萱沂", row: 1, times: 0, strokes: 23, poses: 1 },
    { id: 1204, name: "冯一诺", row: 2, times: 0, strokes: 16, poses: 1 },
    { id: 1205, name: "郭芸昕", row: 2, times: 0, strokes: 25, poses: 1 },
    { id: 1206, name: "李欣霖", row: 1, times: 1, strokes: 31, poses: 1 },
    { id: 1207, name: "吕匡", row: 1, times: 3, strokes: 12, poses: 2 },
    { id: 1208, name: "杨雨时", row: 1, times: 4, strokes: 22, poses: 0 },
    { id: 1209, name: "殷康宁", row: 2, times: 0, strokes: 26, poses: 1 },
    { id: 1210, name: "周世媛", row: 1, times: 0, strokes: 25, poses: 1 },
    { id: 1211, name: "朱安琪", row: 2, times: 4, strokes: 24, poses: 3 },
    { id: 1212, name: "陈子天", row: 5, times: 0, strokes: 14, poses: 0 },
    { id: 1213, name: "仇煦丞", row: 3, times: 0, strokes: 23, poses: 1 },
    { id: 1214, name: "方时逸", row: 3, times: 4, strokes: 22, poses: 1 },
    { id: 1215, name: "丰文凯", row: 3, times: 0, strokes: 16, poses: 0 },
    { id: 1216, name: "黄俊哲", row: 2, times: 2, strokes: 30, poses: 0 },
    { id: 1217, name: "黄云博", row: 4, times: 0, strokes: 27, poses: 3 },
    { id: 1218, name: "金炜熠", row: 2, times: 0, strokes: 31, poses: 0 },
    { id: 1219, name: "黎益均", row: 4, times: 0, strokes: 32, poses: 0 },
    { id: 1220, name: "李家贝", row: 5, times: 0, strokes: 21, poses: 0 },
    { id: 1221, name: "李王徵瑜", row: 5, times: 2, strokes: 39, poses: 1 },
    { id: 1222, name: "林沛远", row: 3, times: 3, strokes: 22, poses: 0 },
    { id: 1223, name: "林修齐", row: 6, times: 4, strokes: 23, poses: 2 },
    { id: 1224, name: "刘怿禛", row: 5, times: 0, strokes: 28, poses: 1 },
    { id: 1225, name: "茅谦行", row: 6, times: 0, strokes: 26, poses: 0 },
    { id: 1226, name: "茅肇中", row: 4, times: 0, strokes: 26, poses: 2 },
    { id: 1227, name: "皮桓宇", row: 5, times: 0, strokes: 21, poses: 2 },
    { id: 1228, name: "钱霖枫", row: 3, times: 4, strokes: 34, poses: 2 },
    { id: 1229, name: "瞿逸程", row: 3, times: 0, strokes: 41, poses: 2 },
    { id: 1230, name: "桑烨鑫", row: 0, times: 0, strokes: 0,  poses: 0 },
    { id: 1231, name: "石昊洲", row: 0, times: 0, strokes: 0,  poses: 0 },
    { id: 1232, name: "万仲杰", row: 4, times: 0, strokes: 17, poses: 0 },
    { id: 1233, name: "王元衡", row: 6, times: 0, strokes: 24, poses: 1 },
    { id: 1234, name: "王哲浩", row: 4, times: 0, strokes: 24, poses: 1 },
    { id: 1235, name: "徐子墨", row: 5, times: 0, strokes: 28, poses: 0 },
    { id: 1236, name: "徐梓晖", row: 4, times: 3, strokes: 31, poses: 1 },
    { id: 1237, name: "薛正懋", row: 2, times: 1, strokes: 38, poses: 3 },
    { id: 1238, name: "杨本烨", row: 6, times: 4, strokes: 22, poses: 0 },
    { id: 1239, name: "张子凡", row: 5, times: 0, strokes: 13, poses: 0 },
    { id: 1240, name: "周宇曦", row: 6, times: 4, strokes: 34, poses: 1 },
    { id: 1241, name: "朱云祯", row: 4, times: 1, strokes: 20, poses: 0 },
    { id: 1242, name: "朱子铭", row: 3, times: 0, strokes: 20, poses: 1 }
];

const tipName = {"row": "座位所在横排", "times":"总分前30次数", "strokes": "姓名笔画总数", "poses": "班级中职位数"};

const form = document.getElementById("form");
const content = document.getElementById("content");
const results = document.getElementById('results');
const again = document.getElementById('again');
const lifeCount = document.getElementById('lives');
let guessed = [];
let target;
let lives = 4;

function generateStudent() {
    let exist = false
    while (!exist) {
        const list = [...Array(42).keys()];
        for (let i = list.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = list[i];
            list[i] = list[j];
            list[j] = k;
        }
        if (list[0] != 29 && list[0] != 30) { target = students[list[0]]; exist = true; }
        else { exist = false; }
    }
    const id = target['id'];
    const token = (id.toString().slice(0,2) * id.toString().slice(2,4)) ** 2 - 84;
    localStorage.setItem('starget', token);
}

function listenClick(e) {
    content.style.display = "block";
    e.stopPropagation();
}

form.addEventListener("click", listenClick);

const divs = content.querySelectorAll('.choice');
divs.forEach(div => {
    div.addEventListener('click', function() {
        const id = this.textContent.trim().slice(2,4);
        const stuName = this.textContent.trim().slice(4);
        if(!guessed.includes(id)) {
            createBlock(id - 1, stuName);
            if (id == target['id'].toString().slice(2)) {win();}
            else {
                guessed.push(id);
                localStorage.setItem('cs_guessed', JSON.stringify(guessed));
                content.style.display = "none";
                lives -= 1;
                lifeCount.textContent = `剩余机会：${lives}`;
                if (lives == 0) {lose();}
            }
        } else {
            warning(`已经填过${this.textContent.trim().slice(4)}了`);
        }
    });
});

again.addEventListener('click', function(){
    guessed = [];
    lives = 4;
    lifeCount.style.color = 'black';
    lifeCount.textContent = `剩余机会：${lives}`;
    results.innerHTML = '';
    generateStudent();
    form.removeEventListener('click', alertWin);
    form.removeEventListener('click', alertLose);
    form.addEventListener('click', listenClick);
    again.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('starget')) {
        const token = JSON.parse(localStorage.getItem('starget'));
        const stuId = Math.sqrt(token + 84) / 12;
        target = students[stuId - 1];
        const ifGuessed = JSON.parse(localStorage.getItem('cs_guessed'));
        if (ifGuessed) {
            guessed = ifGuessed;
            lives = 4 - guessed.length;
            for (id of guessed) {
                const stuName = students[id - 1]['name'];
                createBlock(id - 1, stuName);
            }
        }
        lifeCount.textContent = `剩余机会：${lives}`;
    } else {
        lives = 4;
        lifeCount.textContent = `剩余机会：${lives}`;
        generateStudent();
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
    localStorage.removeItem('cs_guessed');
    localStorage.removeItem('starget');
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

function createBlock(index, stuName) {
    const guess = students[index];
    const trys = document.createElement('div');
    trys.className = 'trys';
    const guesses = document.createElement('div');
    guesses.className = 'guesses';
    guesses.textContent = stuName;
    trys.appendChild(guesses);
    const tip = document.createElement('div');
    tip.className = 'tip';
    for (key in guess) {
        if (key == 'id' || key == 'name') {continue;}
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