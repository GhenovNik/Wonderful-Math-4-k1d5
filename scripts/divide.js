const option1 = document.getElementById("option1"),
    option2 = document.getElementById("option2"),
    option3 = document.getElementById("option3"),
    audio = document.getElementById("myAudio");
let answer = 0;

function generate_equation(){
    let num1 = Math.floor(Math.random() * 10) + 1,
        num2 = Math.floor(Math.random() * 10) + 1,
        dummyAnswer1 = Math.floor(Math.random() * 10) / 10,
        dummyAnswer2 = Math.floor(Math.random() * 10),
        allAnswers = [],
        switchAnswers = [];

    if(num1 > num2){
        answer = num1 / num2;
        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").innerHTML = num2;
    }
    else{
        answer = num2 / num1;
        document.getElementById("num1").innerHTML = num2;
        document.getElementById("num2").innerHTML = num1;
    }

    if(Number.isInteger(answer) === false){
        answer = parseFloat(answer.toFixed(1));
    }

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (let i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

}

option1.addEventListener("click", function(){
    if(parseFloat(option1.innerHTML) === answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener("click", function(){
    if(parseFloat(option2.innerHTML) === answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option3.addEventListener("click", function(){
    if(parseFloat(option3.innerHTML) === answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

generate_equation();
