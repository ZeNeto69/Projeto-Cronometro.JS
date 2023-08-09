//constantes
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const militimesEl = document.getElementById('militimes')
const StartBtn = document.getElementById('StartBtn')
const PauseBtn = document.getElementById('PauseBtn')
const ResetBtn = document.getElementById('ResetBtn')
const ResumeBtn= document.getElementById('ResumeBtn')

//variáveis
let interval
let minutes = 0
let seconds = 0
let militimes = 0
let isPaused = false

//eventos:
StartBtn.addEventListener("click", startTimer)
PauseBtn.addEventListener("click", pauseTimer)
ResumeBtn.addEventListener("click", resumeTimer)
ResetBtn.addEventListener("click", resetTimer)

function startTimer() { //função de iniciar o cronômetro
    
    interval = setInterval(() => {
        if(!isPaused){
            militimes += 10
            if(militimes === 1000) {
                seconds ++
                militimes = 0
            }
            if(seconds === 60) {
                minutes ++
                seconds = 0
            }
            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            militimesEl.textContent = formatMilitimes(militimes)
        }

    }, 10);

    StartBtn.style.display = 'none'
    PauseBtn.style.display = 'block'
}

function pauseTimer(){ // função parar o cronômetro
    isPaused = true
    PauseBtn.style.display = 'none'
    ResumeBtn.style.display = 'block'
}

function resumeTimer(){ //função continuar o cronômetro
    isPaused = false
    PauseBtn.style.display = 'block'
    ResumeBtn.style.display = 'none'
}

function resetTimer(){ //funcão para resetar o cronômetro
    clearInterval(interval)
    minutes = 0
    seconds = 0
    militimes = 0
    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    militimesEl.textContent = "000"

    StartBtn.style.display = 'block'
    PauseBtn.style.display = 'none'
    ResumeBtn.style.display = 'none'
}

function formatTime(time){ //formatação de tempo
    return time < 10 ? `0${time}` :time;
}

function formatMilitimes(time){ //formatação dos milisegundos
    return time < 100 ? `${time}`.padStart(3, "0") : time
}
