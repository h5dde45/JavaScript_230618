function alertInfo() {
    alert("новый");
}

function checkTime() {
    let timeInSec = Math.round(Date.now()/1000);
    if(timeInSec>1530330800){
        alertInfo();
    }
}

checkTime();