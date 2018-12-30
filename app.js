const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const badget = document.querySelector('.badget');
const body = document.querySelector('.body');
const main = document.querySelector('.main');


body.style.backgroundColor = 'white';

badget.addEventListener('click', function(){
    if(body.style.backgroundColor === 'white'){
        body.style.backgroundColor = 'black';
        main.style.backgroundColor = 'black';
        main.style.borderColor = 'rgb(0, 193, 219)';
        main.style.boxShadow = '0 0 40px rgb(0, 193, 219)';
    } else {
        body.style.backgroundColor = 'white';
        main.style.backgroundColor = 'grey';
        main.style.borderColor = 'transparent';
        main.style.boxShadow = '0 0 40px transparent';
    }
});

setInterval(function(){
    const date = new Date();
    let getHour = date.getHours();
    let getMinute = date.getMinutes();
    let getSecond = date.getSeconds();
    hour.innerHTML = getHour + ':';
    minute.innerHTML = getMinute + ':';
    second.innerHTML = getSecond;
    if(getHour <=9){
    hour.innerHTML = '0' + getHour + ':';
    } 
    if(getMinute <= 9){
    minute.innerHTML = '0' + getMinute + ':';
    } 
    if(getSecond <= 9){
    second.innerHTML = '0' + getSecond;
    }
});

