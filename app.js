$(mainFunction); //loads DOM

async function retriveGif(){
  let userSearch = $('#search').val();
  const response = await fetch('http://api.giphy.com/v1/gifs/search', {
    api_key: CuYWrRsOGdG3YNUuCgjavI1QueJ1bYEh,
    q: userSearch
  });
  const gif = await response.img();

  console.log('response = ', response);
}

$('#search').on('click', retriveGif);


console.log("Let's get this party started!");

// api key = CuYWrRsOGdG3YNUuCgjavI1QueJ1bYEh