let timer = null;
function startTimer() {
    let inputElement = document.querySelector('#timerInput');
    let countDown = document.querySelector('#countDown');
    let seconds = parseInt(inputElement.value);
    // Make sure it is a positive number
    if (isNaN(seconds) || seconds <= 0) {
        countDown.textContent = "Please enter a positive number";
        return;
    }
    //Make sure no other timer is running
    if (timer !== null){
        clearInterval(timer);
    }
    //Change the text of the button
    document.querySelector('#timerStart').textContent = 'Replace Timer'
    //Clear the text box
    document.querySelector('#timerInput').value = ''
    //display the first number
    countDown.textContent = seconds;
    //start a timer
    timer = setInterval(function() {
        seconds --;
        countDown.textContent = seconds;
        //stop the timer
        if (seconds <= 0) {
            clearInterval(timer);
            timer = null;
            alert("Surprise!");
            document.querySelector('#timerStart').textContent = 'Start Timer'
            countDown.textContent = 'No active timer';
        }
    }, 1000);
}