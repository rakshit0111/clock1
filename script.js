setInterval(showTime,1000);
function showTime()
{
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    am_pm = "AM";
    if(hours >= 12)
    {
        if(hours > 12)
        {
            hours = hours - 12;
            am_pm = "PM";
        }
    } 
    else if(hours == 0)
    {
        hours = 12 ;
        am_pm = "AM";
    }
     hours = hours < 10 ? "0" + hours : hours;
     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds : seconds;
     let currentTime = hours + ":"  + minutes + ":" + seconds + am_pm;
      document.getElementById("clock").innerHTML = currentTime;
}
showTime();
function animateDigitChange(selector, newDigit) {
    const digitElement = document.querySelector(selector);
    digitElement.classList.add('fade-in', 'bounce'); 
    setTimeout(() => {
        digitElement.innerText = newDigit;
        digitElement.classList.remove('fade-in', 'bounce');
    }, 500); 
}
