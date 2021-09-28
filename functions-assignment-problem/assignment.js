
const DEFAULT_NAME = 'Anoop kumar';
const YOUR_NAME = prompt('what is your name sir','');

const greeting = (name) => {
  console.log('Hello mr. '+ name);
}; 

const checkInput = name =>{
  
  if( name === '')
  {
    alert('no string is passed');
  }
  else{
    greeting(name);
  }

};

const sayHello = (name = DEFAULT_NAME ) => {
  
 checkInput(name);
};



sayHello(YOUR_NAME);