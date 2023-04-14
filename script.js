let cross = document.querySelector('.popup__cross');
let popup = document.querySelector('.popup');
let setting = document.querySelector('.info__edit-button');
let root = document.querySelector('.root');
let likeButton = document.querySelectorAll('.element__like');

cross.onclick = function close(){
    popup.hidden = true;
    root.classList.remove('cover');
}

setting.onclick = function open(){
    popup.hidden = false;
    root.classList.add('cover');
}

likeButton.forEach(x => x.classList.toggle('element__like-active'));



console.log(likeButton);