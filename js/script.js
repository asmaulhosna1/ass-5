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
});


let clickedCount = 0;
    
function handleClick(button, divName) {
        alert(`Board updated succesfully`);
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
    p.innerText = `${divName} at ${currentTime}`;
    p.style.marginBottom="15px";
    p.style.border="1px solid black";
    p.style.border="none";
    p.style.backgroundColor="#f1f5fd";
    p.style.borderRadius="10px";
    p.style.boxShadow="2px 2px 5px rgba(0, 0, 0, 0.1";
    logSection.appendChild(p);
   
    clickedCount++;
      if (clickedCount === 6) {
        alert("Congrates! You have completed all the current task");
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
   logSection.innerHTML=" ";
}

