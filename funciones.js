const toggle = document.getElementById('modo');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background = 'linear-gradient(0deg, rgba(250,214,164,1) 0%, rgba(0,200,245,1) 11%, rgba(58,71,213,1) 100%)';
        body.style.transition = 'background 1s linear';
    }else{
        body.style.background = 'linear-gradient(0deg, rgba(71,20,49,1) 0%, rgba(20,24,71,1) 11%, rgba(7,9,25,1) 100%)';
        body.style.transition = 'background 1s linear';
    }
});