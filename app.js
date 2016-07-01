$(document).ready(function(){
  //movie 1 = Serenity
  $.ajax({
    url:'http://www.omdbapi.com/?t=Serenity&y=&plot=full&r=json'
  })
  .done(function(data){
    var serenity = data;
    var serenityPoster = data.Poster
    $('.listofmovies').append('<h3>'+ serenity.Title +'</h3>');
    // GET THIS SHIT WORKING TONIGHT
    $('.listofmovies').append('<img src='+ serenityPoster +'></img>')
    $('.listofmovies').append('<p>'+ serenity.Plot +'</p>');
    $('.listofmovies').append('<p>Starring: '+ serenity.Actors +'</p>')
    console.log(data);
  });

//movie 2
$.ajax({
  url:'http://www.omdbapi.com/?t=History+Of+Future+Folk&y=&plot=full&r=json'
})
.done(function(data){
  var futureFolk= data;
  var futureFolkPoster= data.Poster;
  $('.listofmovies').append('<h3>'+ futureFolk.Title +'</h3>');
  // GET THIS SHIT WORKING TONIGHT
  $('.listofmovies').append('<img src='+futureFolkPoster+'></img>')
  $('.listofmovies').append('<p>'+ futureFolk.Plot +'</p>');
  $('.listofmovies').append('<p>Starring: '+ futureFolk.Actors +'</p>')
  console.log(futureFolkPoster);
});



//movie 3

$.ajax({
  url:'http://www.omdbapi.com/?t=God+Bless+America&y=&plot=full&r=json'
})
.done(function(data){
  var godBless= data;
  var godBlessPoster = data.Poster
  $('.listofmovies').append('<h3>'+ godBless.Title +'</h3>');
  // GET THIS SHIT WORKING TONIGHT
  $('.listofmovies').append('<img src='+ godBlessPoster +'></img>')
  $('.listofmovies').append('<p>'+ godBless.Plot +'</p>');
  $('.listofmovies').append('<p>Starring: '+ godBless.Actors +'</p>')
  console.log(data);
});


});
