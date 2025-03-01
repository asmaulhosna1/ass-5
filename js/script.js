const image=document.getElementById("bg-color-change")
.addEventListener("click",function(){
   const randomColor = getRandomColor();
   document.body.style.backgroundColor = randomColor;
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = formattedDate;
}
setInterval(updateDate, 86400000); 
updateDate();

document.getElementById("new-page-open")
.addEventListener("click",function(){
    window.location.href="blog.html"
})


let clickedCount = 0;
    
function handleClick(button, divName) {
        alert(`Button in ${divName} clicked!`);
       button.disabled = true;
    
    let countDownElement = document.getElementById("countDown");
    let countUpElement = document.getElementById("countUp");
        let countDown = parseInt(countDownElement.innerText);
    let countUp = parseInt(countUpElement.innerText);
    countDownElement.innerText = countDown - 1;
    countUpElement.innerText = countUp + 1;
    
    let logSection = document.getElementById("logSection");
    let currentTime = new Date().toLocaleTimeString();
    let p = document.createElement("p");
    p.innerText = `${divName} - Clicked at ${currentTime}`;
    logSection.appendChild(p);
   
    clickedCount++;
      if (clickedCount === 6) {
        alert("All buttons are clicked!");
        disableAllButtons();
    }
}

function disableAllButtons() {
    let buttons = document.querySelectorAll("button");
   for(let button of buttons){
        if (button.id !== "clearLogButton") {
            button.disabled = true;
        }
    }
}

function clearLogs() {
    let logSection = document.getElementById("logSection");
    if (logSection.children.length > 0) {
        logSection.removeChild(logSection.children[0]);
    }
}