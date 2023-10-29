// const preg = document.querySelectorAll('.preg');
// const a = document.querySelectorAll('.a');
// const arr = document.querySelectorAll('.arrow');

// for(let i=0; i <.preg.length; i++) {
//     q [i].addEventListener('click', () => {
        
//         a[i].classList.toggle('a-opened');

//         arr[i].classList.toggle('arrow-rotated');
//     });
// }
const data = 'source_language=en&target_language=id&text=What%20is%20your%20name%3F';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://text-translator2.p.rapidapi.com/translate');
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-RapidAPI-Key', 'f11e978b56mshac82c76b23ea69ep1c17e4jsn9b9c7e63dd35');
xhr.setRequestHeader('X-RapidAPI-Host', 'text-translator2.p.rapidapi.com');

xhr.send(data);
