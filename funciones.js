const toggle = document.getElementById('modo');
const body = document.querySelector('body');
const tarjeta = document.querySelector('#backend');
const tarjeta2 = document.querySelector('#frontend');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        
        body.style.background = 'linear-gradient(0deg, rgba(250,214,164,1) 0%, rgba(0,200,245,1) 11%, rgba(58,71,213,1) 100%)';
        body.style.transition = 'background 1s linear';
    }else{
        body.style.background = 'linear-gradient(30deg, #141847 0%, #070919 100%)';
        body.style.transition = 'background 1s linear';
    }
});