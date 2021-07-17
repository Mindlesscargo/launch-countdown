const launchDate = '10/1/2021'

window.onload = function () {
    const days = document.getElementById('days')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    let timeObjects = {
        seconds,
        minutes,
        hours,
        days
    }
    const x = setInterval(updateClock, 1000)

    function updateClock() {
        let timeReamining = getTimeRemaining()
        Object.keys(timeObjects).every((e) => {
            console.log(true)
            if (parseInt(timeObjects[e].querySelector('#topFallbackText').innerText) != timeReamining[e]) {
                updateFlap(timeObjects[e], timeReamining[e])
                return true;
            }
            return false;
        })
    }

    function getTimeRemaining(){
        const total = Date.parse(launchDate) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );
      
        return {
          total,
          days,
          hours,
          minutes,
          seconds
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