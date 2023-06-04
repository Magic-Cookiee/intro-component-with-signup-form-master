let sendButton = document.querySelector('#form-button');
let inputs = document.querySelectorAll('.validation');

sendButton.addEventListener('click', function(event){
    event.preventDefault()
    for(let i=0; i<inputs.length; i++){
        let onError = document.querySelectorAll('.onError')
        if(inputs[i].value == 0){
            inputs[i].classList.add('error')
            inputs[i].setAttribute('placeholder', ' ');
            onError[i].style.display = 'block'        
        } else {
            inputs[i].classList.remove('error')
            onError[i].style.display = 'none'
            inputs[i].setAttribute('placeholder', onError[i].textContent.slice(0, onError[i].textContent.indexOf('c')));
        }
        if(inputs[2].value.indexOf("@") == -1 || inputs[2].value.lastIndexOf(".") == -1){
            inputs[2].classList.add('error')
            inputs[2].setAttribute('placeholder', ' ');
            onError[2].style.display = 'block'
        } else {
            inputs[2].classList.remove('error')
            inputs[2].setAttribute('placeholder', 'Email Address');
            onError[2].style.display = 'none'
        }
    }
})