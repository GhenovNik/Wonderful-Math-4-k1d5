const option1 = document.getElementById("option1"),
    option2 = document.getElementById("option2"),
    option3 = document.getElementById("option3"),
    num1El = document.getElementById("num1"),
    num2El = document.getElementById("num2"),
    audio = document.getElementById("myAudio"),
    operation = document.body.dataset.operation;

let answer = 0;

function rand(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = rand(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateEquation() {
    let a = rand(13), b = rand(13);
    let dummy1, dummy2;

    switch (operation) {
        case 'add':
            answer = a + b;
            dummy1 = rand(10);
            dummy2 = rand(10);
            break;
        case 'subtract':
            if (a < b) [a, b] = [b, a];
            answer = a - b;
            dummy1 = rand(13);
            dummy2 = rand(13);
            break;
        case 'multiply':
            answer = a * b;
            dummy1 = rand(50);
            dummy2 = rand(50);
            break;
        case 'divide':
            a = rand(10) + 1;
            b = rand(10) + 1;
            if (a < b) [a, b] = [b, a];
            answer = parseFloat((a / b).toFixed(1));
            dummy1 = parseFloat((rand(10) / 10).toFixed(1));
            dummy2 = rand(10);
            break;
    }

    num1El.textContent = a;
    num2El.textContent = b;

    const choices = shuffle([answer, dummy1, dummy2]);
    option1.textContent = choices[0];
    option2.textContent = choices[1];
    option3.textContent = choices[2];
}

document.querySelector(".answer-options").addEventListener("click", function (e) {
    const opt = e.target.closest("h1");
    if (!opt) return;
    if (parseFloat(opt.textContent) === answer) {
        generateEquation();
    } else {
        audio.currentTime = 0;
        audio.play();
    }
});

generateEquation();
