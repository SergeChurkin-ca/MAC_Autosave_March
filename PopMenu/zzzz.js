let emailValue = document.getElementById('Email')
const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
emailValue.value.match(res) !== null



/* 

how i get that email value not make pass?

only if email value has something wrong
or only if it ==== than if filters out
*/