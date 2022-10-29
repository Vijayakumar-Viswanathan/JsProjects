const btnStart = document.querySelector('.start')
const btnStop = document.querySelector('.stop')
const btnReset = document.querySelector('.reset')

let hrs=min=sec=ms=0, startTimer;

btnStart.addEventListener('click',()=>{
    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
    startTimer = setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
UpdateDisplay();
    },10)

});

btnStop.addEventListener('click',()=>{

    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
clearInterval(startTimer);
});

btnReset.addEventListener('click',()=>{
   
    hrs =min=sec=ms=0;
    clearInterval(startTimer);
    UpdateDisplay();
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
});

function UpdateDisplay(){
    vhrs = hrs<10?'0'+hrs:hrs;
    vmin = min<10?'0'+min:min;
    vsec = sec<10?'0'+sec:sec;
    vms = ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=vhrs;
    document.querySelector('.min').innerText=vmin;
    document.querySelector('.sec').innerText=vsec;
    document.querySelector('.ms').innerText=vms;
}