var h = 8;
var m = 26;
var p = 'AM';
var per = 'in the morning.'

function whileUWait_1(){
    if (p == 'PM'){
        per = 'in the evening.';
    }
    if(m == 5){
        console.log("It's 5 after", h, per);
    }
    else if (m == 15){
        console.log("It's quarter after", h, per);
    }
    else if (m == 30){
        console.log("It's half past", h, per);
    }
    else if (m > 30){
        h += 1;
        console.log("It's almost", h, per);
    }
    else{
        console.log("It's just past", h, per);
    }
}

whileUWait_1();

var h = 8;
var m = 26;
var p = 'AM';
var per = 'in the morning.'

function whileUWait_2(){
    if(h == 12 && p == 'PM'){
        per = 'noon';
        console.log("It's", per);
    }
    else if(h == 12 && p == 'AM'){
        per = 'midnight';
        console.log("It's", per);
    }
    else if(p == 'PM' && h < 6){
        per = 'in the afternoon';
    }
    else if(p == 'PM' && h >= 6){
        per = 'in the evening'
    }
    else if(m == 5){
        console.log("It's 5 after", h, per);
    }
    else if (m == 15){
        console.log("It's quarter after", h, per);
    }
    else if (m == 30){
        console.log("It's half past", h, per);
    }
    else if (m > 30){
        h += 1;
        console.log("It's almost", h, per);
    }
    else if(m <= 30){
        console.log("It's just past", h, per);
    }
}

whileUWait_2();
