function countdown(number){
    var timer = setInterval(function() {
        number = number - 1;
        if(number <= 0){
            console.log('DONE!');
            clearInterval(timer)
        }
        else {
            console.log(number);
        }
    }, 1000)
}

function randomGame(){
    var number;
    var tries = 0;
    var timer = setInterval(function(){
        number = Math.random();
        tries = tries + 1;
        if(number > .75) {
            console.log("There were " + tries + " try/tries for the random number to be greater than .75");
            clearInterval(timer);
        }
    }, 1000)
}