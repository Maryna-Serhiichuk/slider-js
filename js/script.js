let prew = document.querySelector('.arrow-prew');
let next = document.querySelector('.arrow-next');
let slideImg = document.querySelector('#slide-img');
let modalWindow = document.querySelector('.modal');

let modalClose = document.querySelector('.modal__close');

const modalImage = document.querySelector('#modal__img');

let imgUrl = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

let imgIndex = 0;
slideImg.src = imgUrl[imgIndex];

prew.addEventListener('click', showPrew);
next.addEventListener('click', showNext);

giveStyleButton();

let interval = setInterval(timeOut, 3000);

function giveStyleButton(){
	controlArrow(next, imgUrl.length - 1);
	controlArrow(prew, 0);
}

function controlArrow(button, data){
	button.style.pointerEvents = 'auto';
	button.style.opacity = '1';

	if(imgIndex == data){
		button.style.pointerEvents = 'none';
		button.style.opacity = '0.3';
	}
}

function timeOut(){
	imgIndex++;
	if(imgIndex == imgUrl.length){
		imgIndex = 0;
	}
	slideImg.src = imgUrl[imgIndex];
	giveStyleButton();
}

function showPrew(){

	if(imgIndex > 0){
		imgIndex--;
	}
	slideImg.src = imgUrl[imgIndex];

	controlArrow(prew, 0);
	giveStyleButton();
	
	clearInterval(interval);
	interval = setInterval(timeOut, 3000);
}

function showNext(){

	if(imgIndex < imgUrl.length - 1){
		imgIndex++;
	}
	slideImg.src = imgUrl[imgIndex];

	controlArrow(next, imgUrl.length - 1);
	giveStyleButton();

	clearInterval(interval);
	interval = setInterval(timeOut, 3000);
}

slideImg.addEventListener('click', showModalWindow);
function showModalWindow(){

	modalImage.src = imgUrl[imgIndex];

	modalWindow.style.display = 'flex';
}

modalClose.addEventListener('click', deleteModalWindow);
function deleteModalWindow(){
	modalWindow.style.display = 'none';
}