const preg = document.querySelectorAll('.preg');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i=0; i <.preg.length; i++) {
    q [i].addEventListener('click', () => {
        
        a[i].classList.toggle('a-opened');

        arr[i].classList.toggle('arrow-rotated');
    });
}