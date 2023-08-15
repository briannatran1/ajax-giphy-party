// $(mainFunction); //loads DOM
$(function() {
  const $gifArea = $('.gif-area');

  /** Retrieves gif from Giphy API */
  async function retrieveGif(event){
    event.preventDefault();

    let userSearch = $('#search').val();
    const api_key = "qVuTy0qY9wfLZxCn5E8ph4LVWchxe62q";
    let q = `${userSearch}`;

    const params = new URLSearchParams({api_key, q})
    let response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);



  }

  $('#search').on('click', retrieveGif);

  /** Removes all gifs from gifArea when clicking on the remove images button */
  $('#remove').on('click', function(){
    $gifArea.empty();
  });
})




// console.log("Let's get this party started!");

// api key = CuYWrRsOGdG3YNUuCgjavI1QueJ1bYEh