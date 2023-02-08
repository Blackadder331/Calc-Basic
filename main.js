let currentInput = document.querySelector('.current-input');
let answerScreen = document.querySelector('.answer-screen');
let buttons = document.querySelectorAll('button');
let eraseBtn = document.querySelector('#erase');
let clearBtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// Calc display
let realTimeScreenValue = []

// Clear
clearBtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'current-input';
    answerScreen.className = 'answer-screen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87";
})

// Display value

buttons.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        //when clicked button is not erased button
        if (!btn.id.match('erase')) {
            //to display value on button press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            //to evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        //when erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = 'answer-screen';
            answerScreen.className = 'current-input';
            answerScreen.style.color = "white";
        }

        //to prevent undefined error
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }
    })
})