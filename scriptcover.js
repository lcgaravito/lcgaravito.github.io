const changeGreeting = function() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var greetingChanged = '';
    if (hour >= 6 && hour < 12) {
        greetingChanged = '¡Buenos días!';
    } else if (hour >= 12 && hour < 18) {
        greetingChanged = '¡Buenas tardes!'
    } else {
        greetingChanged = '¡Buenas noches!'
    }
    document.getElementById("greeting").innerHTML = greetingChanged;
    if(minutes<10) {
        document.getElementById("hourSpan").innerHTML = hour + ':0' + minutes;
    }else{
        document.getElementById("hourSpan").innerHTML = hour + ':' + minutes;
    }
}

changeGreeting();