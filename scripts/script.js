const cross = document.querySelectorAll('.popup__cross');
const popupProfileSetting = document.querySelector('.popup_profile-editor');
const popupCards = document.querySelector('.popup_card-editor');
const setting = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupHeading = document.querySelector(".popup__heading");
const popupName = document.querySelector(".popup__input-name");
const popupDiscription = document.querySelector(".popup__input-discription");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const saveButtonCards = document.querySelector(".popup__button_cards");
const saveButtonSettings = document.querySelector(".popup__button_settings");
const cardsBlock = document.querySelector(".elements");
const deleteButton = document.querySelector(".element__delete");
const popupPhoto = document.querySelector(".popup_photo");
const popupPhotoEl = document.querySelector('.popup__image');
const popupPhotopopupDescription = document.querySelector('.popup__caption');
const popupPlaceLink = document.querySelector('.popup__input-place-link');
const popupPlaceName = document.querySelector('.popup__input-place-name');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// закрытие попапа
cross.forEach((e) => {
  e.addEventListener('click', function (evt) {

    closePopup(popupProfileSetting);
    closePopup(popupCards);
    closePopup(popupPhoto);


  });
});



// открытие попапа setting(редактирования профиля)

setting.addEventListener("click", function () {
  openPopup(popupProfileSetting);
  popupName.placeholder = profileTitle.textContent;
  popupDiscription.placeholder = profileSubtitle.textContent;
  popupName.value = "";
  popupDiscription.value = "";

});




//открытие addButton

addButton.addEventListener("click", function () {
  openPopup(popupCards);
  popupName.value = "";
  popupDiscription.value = "";
});




saveButtonCards.addEventListener("click", function (event) {
  event.preventDefault();
  createCard(popupPlaceLink.value, popupPlaceName.value);
  popupPlaceLink.value = "";
  popupPlaceName.value = "";
  closePopup(popupCards);
});


saveButtonSettings.addEventListener("click", function (event) {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupDiscription.value;
  closePopup(popupProfileSetting);
});



function openPopup(popupEl) {
  popupEl.classList.add('popup_open');
};

function closePopup(popupEl) {
  popupEl.classList.remove('popup_open');
}



//карточки

function arrReader(arr) {
  arr.forEach((e) => {
    createCard(e.link, e.name);
  });
};
arrReader(initialCards);


function createCard(link, names) {
  console.log('createCard');
  let cardEl = document.createElement('div');
  cardEl.classList.add('element');
  let deleteButtonEl = document.createElement('button');
  deleteButtonEl.classList.add('element__delete');
  let imageEl = document.createElement('img');
  imageEl.classList.add('element__photo');
  imageEl.src = link;
  imageEl.alt = names;
  let cardDescription = document.createElement('div');
  cardDescription.classList.add('element__discription');
  let cardHeader = document.createElement('h3');
  cardHeader.classList.add('element__header');
  cardHeader.textContent = names;
  let cardLike = document.createElement('button');
  cardLike.classList.add('element__like');

  cardDescription.append(cardHeader, cardLike);
  cardEl.append(deleteButtonEl, imageEl, cardDescription);
  cardsBlock.prepend(cardEl);

  cardDescription.querySelector('.element__like').addEventListener('click', function (evt) {
    console.log("like", evt)
    evt.target.classList.toggle("element__like-active");
  });

  cardEl.querySelector('.element__delete').addEventListener('click', function (evt) {
    cardEl.remove();
  });

  cardEl.querySelector('.element__photo').addEventListener('click', function (evt) {
    console.log("клик по фото", evt);
    console.log(evt.target.currentSrc);
    popupPhotoEl.src = evt.target.currentSrc;
    popupPhotopopupDescription.textContent = evt.target.alt;
    openPopup(popupPhoto);

  });

};


