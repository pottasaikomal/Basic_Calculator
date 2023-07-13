let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.innerHTML == 'C') {
            string = '';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'M+' || e.target.innerHTML == 'M-');
        else if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        // console.log(string);
    })
})