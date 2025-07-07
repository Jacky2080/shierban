document.addEventListener("DOMContentLoaded", function() {
    const layout = document.getElementById("layout");
    const grids = document.querySelectorAll('.grid');
    const content = document.getElementById('content');
    let currentGrid = null;

    const names = {
        1201: 0,
        1202: 0,
        1203: 0,
        1204: 0,
        1205: 0,
        1206: 0,
        1207: 0,
        1208: 0,
        1209: 0,
        1210: 0,
        1211: 0,
        1212: 0,
        1213: 0,
        1214: 0,
        1215: 0,
        1216: 0,
        1217: 0,
        1218: 0,
        1219: 0,
        1220: 0,
        1221: 0,
        1222: 0,
        1223: 0,
        1224: 0,
        1225: 0,
        1226: 0,
        1227: 0,
        1228: 0,
        1229: 0,
        1230: 0,
        1231: 0,
        1232: 0,
        1233: 0,
        1234: 0,
        1235: 0,
        1236: 0,
        1237: 0,
        1238: 0,
        1239: 0,
        1240: 0,
        1241: 0,
        1242: 0,
    };
    
    grids.forEach(grid => {
        grid.addEventListener('click', function() {
        layout.style.display = "flex";
        document.body.style.overflow = "hidden";
        currentGrid = this;
        });
    });
    
    const divs = content.querySelectorAll('.choice');
    divs.forEach(div => {
        div.addEventListener('click', function() {
            nameIndex = this.textContent.trim().slice(0,4);
            const value = names[nameIndex];
            if(value === 0 || value === currentGrid.id) {
                if(currentGrid.textContent) {
                    names[currentGrid.textContent.trim().slice(0,4)] = 0;
                }
                currentGrid.textContent = this.textContent;
                names[nameIndex] = currentGrid.id;
                currentGrid = null;
                closeLayout();
            } else {
                alertRepetition(this.textContent.trim().slice(4));
            }
        });
    });
});

function closeLayout() {
    layout.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
}

let alertQueue = [];
let margin = 10;

function alertRepetition(name) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `<span class="alert-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="16px" height="16px" fill="#FAAD14" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg></span><span class="alert-content">已经填过${name}了</span>`;
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