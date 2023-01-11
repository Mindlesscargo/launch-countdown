const launchDate = '05/30/2023'

window.onload = function () {
    const timeObjects = {
        seconds: document.getElementById('seconds'),
        minutes: document.getElementById('minutes'),
        hours: document.getElementById('hours'),
        days: document.getElementById('days')
    }
    setInterval(updateClock, 1000)

    function updateClock() {
        let timeRemaining = getTimeRemaining()
        Object.keys(timeObjects).every((e) => {
            if (parseInt(timeObjects[e].querySelector('#topFallbackText').innerText) != timeRemaining[e]) {
                updateFlap(timeObjects[e], timeRemaining[e])
                return true;
            }
            return false;
        })
    }

    function updateFlap(increment, value) {
        increment.querySelector('#topFallbackText').innerText = value
        increment.querySelector('#bottomFlipperText').innerText = value
        increment.querySelector('.flipper').classList.add('flip')
        let timeout = setTimeout(() => {
            increment.querySelector('#topFlipperText').innerText = value
            increment.querySelector('.flipper').classList.remove('flip')
            increment.querySelector('#bottomFallbackText').innerText = value
        }, 350)
    }

    function getTimeRemaining(){
        let total = Date.parse(launchDate) - Date.parse(new Date());
    
        return {
          days: Math.floor(total/(1000*60*60*24)),
          hours: Math.floor((total/(1000*60*60)) % 24),
          minutes: Math.floor((total/1000/60) % 60),
          seconds: Math.floor((total/1000) % 60)
        };
    }
}
