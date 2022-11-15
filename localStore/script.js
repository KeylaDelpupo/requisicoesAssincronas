localStorage.setItem('name-local', 'keyla cosme delpupo');
let localName = localStorage.getItem('name-local');
let page = document.querySelector('body');

//console.log(localName); só para ver se funcionou...

//session storage

sessionStorage.setItem('name-session', 'pedro')
let sessionName = sessionStorage.getItem('name-session');
//console.log(sessionName)

//variáveis que apontam para os parágrafos name-local e name-session

let nameLocal = document.getElementById('name-local');
let nameSession = document.getElementById('name-session');
//console.log(nameLocal);
//console.log(nameSession);

//como acrescentar no DOM, alterando html dos paragrafos.

nameLocal.innerHTML += localName;
nameSession.innerHTML += sessionName;


console.log(localName);
console.log(sessionName);

if(sessionName){
    page.classList.add('dark-theme')
}else{
    page.classList.add('white-time')
}


