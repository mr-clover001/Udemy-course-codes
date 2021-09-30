
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop =  document.getElementById('backdrop');
// const backdrop =  document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const movies = [];

const updateUI = () =>{
if(movies.length === 0)
{
    entryTextSection.style.display='block';
}else{
    entryTextSection.style.display='none';
}
};

const renderNewMovieElement = () =>{
    
};

const toggleBackdrop = () => {
backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
 addMovieModal.classList.toggle('visible');
 toggleBackdrop();
};

const backdropClickHandler = () =>{
    toggleMovieModal();
};

const clearMovieInput = () =>{

    for (const usrInput of userInputs){
        usrInput.value = '';
    }
};

const cancelAddMovieHandler = () =>{
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {

 const titleValue = userInputs[0].value;
 const imageUrlValue = userInputs[1].value;
 const ratingValue = userInputs[2].value;

 if( titleValue.trim() === '' ||
 imageUrlValue.trim() === '' ||
 ratingValue.trim() === '' ||
 +rating < 1 ||
 +ratingValue >5
 ) {
   alert('enter valid rating value (between 1 and 5)');
   return;
 }

const newMovie = {
 title : titleValue,
 image : imageUrlValue,
 rating : ratingValue
 };

 movies.push(newMovie);
 console.log(movies);
 toggleMovieModal();
 clearMovieInput();
 updateUI();

};

startAddMovieButton.addEventListener('click' , toggleMovieModal);
backdrop.addEventListener('click' , backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);