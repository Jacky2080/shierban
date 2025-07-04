const names = {
    "李慧倩": 0,
    "许敏Shoom": 0,
    "李响": 0,
    "吴纯晨Man": 0,
    "梅宝君": 0,
    "肖飞Shelfy": 0,
    "楼文喆": 0,
    "朱成顺": 0,
    "顾炜": 0,
    "袁福生": 0,
    "周晓辉": 0,
    "闪德龙": 0,
    "崔梦姣": 0,
    "王莹": 0,
    "高超": 0,
    "杨婕": 0,
    "周永麒": 0,
    "郭曙光": 0,
    "陈容桂": 0,
};

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const content = document.getElementById("content");

    form.addEventListener("click",function(e) {
        content.style.display = "block";
        e.stopPropagation();
    });

    const divs = content.querySelectorAll('.choice');
    divs.forEach(div => {
        div.addEventListener('click', function() {;
            const value = names[this.textContent.trim()];
            if(value === 0) {
                document.getElementById("name").textContent = this.textContent;
                names[this.textContent.trim()] = 1;
                content.style.display = "none";
            } else {
                alertRepetition(this.textContent.trim());
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (content.style.display === "block" && !content.contains(event.target)) {
            content.style.display = "none";
        };
    });
});

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