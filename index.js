let currentTime = new Date();

let wantedTime = new Date('December 11, 2023 07:00:00')

let text = document.getElementById('mainText')


function updateTime(){
    currentTime = new Date();
    let timeDifference = wantedTime - currentTime;
    timeDifference = timeDifference / 1000;
    timeDifference = Math.floor(timeDifference);

    text.innerHTML = timeDifference

}
setInterval(updateTime, 30)
