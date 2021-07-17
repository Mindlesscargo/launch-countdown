const launchDate = '10/1/2021'

window.onload = function () {
    let timeObjects = {
        seconds: document.getElementById('seconds'),
        minutes: document.getElementById('minutes'),
        hours: document.getElementById('hours'),
        days: document.getElementById('days')
    }
    const x = setInterval(updateClock, 1000)

    function updateClock() {
        let timeReamining = getTimeRemaining()
        Object.keys(timeObjects).every((e) => {
            if (parseInt(timeObjects[e].querySelector('#topFallbackText').innerText) != timeReamining[e]) {
                updateFlap(timeObjects[e], timeReamining[e])
                return true;
            }
            return false;
        })
    }

    function getTimeRemaining(){
        const total = Date.parse(launchDate) - Date.parse(new Date());

        return {
          days: Math.floor(total/(1000*60*60*24)),
          hours: Math.floor((total/(1000*60*60)) % 24),
          minutes: Math.floor((total/1000/60) % 60),
          seconds: Math.floor((total/1000) % 60)
        };
    }

    function updateFlap(increment, value) {
        increment.querySelector('#topFallbackText').innerText = value
        increment.querySelector('#bottomFlipperText').innerText = value
        increment.querySelector('.flipper').classList.add('flip')
        setTimeout(() => {
            increment.querySelector('#topFlipperText').innerText = value
            increment.querySelector('.flipper').classList.remove('flip')
            increment.querySelector('#bottomFallbackText').innerText = value
        }, 350)
    }
}