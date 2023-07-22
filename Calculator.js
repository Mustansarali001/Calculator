let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);

            if(string == 'Infinity'){
                input.value= 'Invalid Division';
            }
            else{
                input.value = string;
            }
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        } else {
            const lastChar = string.charAt(string.length - 1);
            if (isOperator(lastChar) && isOperator(e.target.innerHTML)) {
                string = string.substring(0, string.length - 1) + e.target.innerHTML;
            } else {
                string += e.target.innerHTML;
            }
            input.value = string;
        }

    })

})

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}
