let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue
        }
        else if (buttonText == '%') {
            buttonText = '/100';
            screenValue += buttonText;
            screen.value = screenValue
        }

        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue
        }

        else if (buttonText == 'del') {
            // screenValue = ""
            // screen.value = screenValue  ;
            // console.log(screenValue)
       screenValue=screen.value.slice(0,-1)
            // console.log(x)
            if(screenValue!==null){
                screen.value=screenValue
            }
            else{
               screenValue=""
               screen.value=screenValue
            }
        }
        else if (buttonText == 'Clear All') {
            screenValue = ""
            screen.value = screenValue  ;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue
         }
        
    })
    
}