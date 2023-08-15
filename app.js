// $(mainFunction); //loads DOM
$(function() {
  let $gifArea = $('.gif-area');


  async function retrieveGif(event){
    event.preventDefault();

    let userSearch = $('#search').val();
    let api_key = "qVuTy0qY9wfLZxCn5E8ph4LVWchxe62q";
    let q = `${userSearch}`;

    const params = new URLSearchParams({api_key, q})
    let response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);

    console.log(response);

  }

  $('#search').on('click', retrieveGif);

  $('#remove').on('click', function(){
    $gifArea.empty();
  });
})




// console.log("Let's get this party started!");

// api key = CuYWrRsOGdG3YNUuCgjavI1QueJ1bYEh