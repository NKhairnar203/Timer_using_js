let tSecond;
let time;

function start() {
    tSecond =
        Number(document.querySelector("#hour").value) * 3600 +
        Number(document.querySelector("#minute").value) * 60 +
        Number(document.querySelector("#second").value);

    if (tSecond <= 0) {
        alert("Enter valid Time......")
        return
    }

    time = setInterval(interVal, 1000)

}

function interVal() {
    if (tSecond <= 0) {
        alert("time is over..")
        
    }

        let hour = Math.floor(tSecond / 3600)
        let minute = Math.floor((tSecond % 3600) / 60)
        let second = tSecond % 60;

        document.querySelector("#hour").value = hour;
        document.querySelector("#minute").value = minute;
        document.querySelector("#second").value = second;
        tSecond--;
    
}


function stop() {
    clearInterval(time);

}



function reset() {
    tSecond = 0;
    document.querySelector("#hour").value = 0;
    document.querySelector("#minute").value = 0;
    document.querySelector("#second").value = 0;

}
