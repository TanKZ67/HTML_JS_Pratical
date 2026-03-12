document.getElementById("messageButton").addEventListener("click", function () {
    alert("you have click button and this is alert")
    console.log("you have click button and this is console")
})

const CB = document.getElementById("colorButton")

CB.addEventListener("click", function () {
    CB.style.backgroundColor = "blue"
    CB.style.color = "white"
    CB.innerText = "and it will change it back on 5 second"
    let timer = 6
    const intervalID = setInterval(function () {

        timer--

        timerClient = timer - 1
        CB.innerText = "and it will change it back on " + timerClient + " second"

        if (timer == 0) {
            CB.style.backgroundColor = "white"
            CB.style.color = "black"
            CB.innerText = "click me to look change color"
            timer = 6
            clearInterval(intervalID)
        }
    }, 1000)
})