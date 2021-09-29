
const button = document.querySelector('button');
const menuBar = document.querySelector('.navbar')

button.addEventListener('click' , ()=>{
    // if(menuBar.className === 'navbar')
    // {
    //     menuBar.className= 'navbar2';
    // }
    
    // else {
    //     menuBar.className= 'navbar';
    // }

    // menuBar.classList.toggle('navbar');
    menuBar.classList.toggle('navbar2');
});

const newDiv = document.createElement('div');
menuBar.appendChild(newDiv);
newDiv.textContent='Anoop kumar';


button.insertAdjacentHTML('beforebegin','<h1>Dive into the DOM!');