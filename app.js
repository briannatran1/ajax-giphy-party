// $(mainFunction); //loads DOM
$(function() {
  async function retrieveGif(event){
    event.preventDefault();
    let userSearch = $('#search').val();
    console.log(userSearch);
    const response = await fetch("http://api.giphy.com/v1/gifs/search", {
      api_key: "CuYWrRsOGdG3YNUuCgjavI1QueJ1bYEh",
      q: `${userSearch}`
    });

    console.log(response);

  }

  $('#search').on('click', retrieveGif);
})




// console.log("Let's get this party started!");

// api key = CuYWrRsOGdG3YNUuCgjavI1QueJ1bYEh