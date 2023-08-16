'use strict';

const $gifArea = $('.gif-area');
const $searchInput = $('#search');
const GIPHY_API_KEY = 'qVuTy0qY9wfLZxCn5E8ph4LVWchxe62q';
const GIPHY_BASE_URL = 'http://api.giphy.com/v1/gifs/search?';

/** Get result from Giphy API. Returns list image URLs */
async function getImagesFromGiphy(evt){
  const searchTerm = $searchInput.val();
  $searchInput.val('');

  const params = new URLSearchParams({q: searchTerm, api_key: GIPHY_API_KEY});
  const response = await fetch(`${GIPHY_BASE_URL}${params}`);
  const gifData = await response.json();

  return gifData.data.map(image => image.images.original.url);
}

/** Use ajax result to add gif to gifArea */
function addImage(imageUrls) {
  if(imageUrls.length > 0){
    const randomIdx = generateRandomIndex(imageUrls);
    const $newCol = $('<div>', {class: 'col-md-4 col-12 mb-4'});
    const $newGif = $('<img>', {
      src:imageUrls[randomIdx]
    });

  $newCol.append($newGif);
  $gifArea.append($newCol);
  }
}

/** Generates random index in an array */
function generateRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}

/** Removes all gifs from gifArea when clicking on the remove images button */
function removeGif(){
  $gifArea.empty();
}

$('#remove').on('click', removeGif);

/** On form submit, get imageUrls and add to list */
async function handleSubmit(evt){
  evt.preventDefault();

  const imageUrls = await getImagesFromGiphy();
  addImage(imageUrls);
}

$('form').on('submit', handleSubmit);
