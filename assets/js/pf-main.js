function showClock() {
    var currentDate = new Date();
    var divClock = document.getElementById("divClock");
    var apm = currentDate.getHours();
    
    var msg = currentDate.getHours() + " : ";
    msg += currentDate.getMinutes() + " : ";
    msg += currentDate.getSeconds();
    
    divClock.innerText = msg;
    
    setTimeout(showClock,1000);
}