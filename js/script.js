//array for crazy lady cat collection
var cats = [{
  img: "images/catclicker.jpg",
  name: "Kitty",
  count: 0,
  id: 1
},
{ img: "images/catclicker2.jpg",
  name: "Mr. Tipps",
  count: 0,
  id: 2
}]


function addCats(cats) {
  for(var i = 0; i < cats.length; i++) {
    //creates div to hold each "cat block"(name, image, counter)
    var catElem = $('body').append('<div></div>');
    //document.createElement('div');
    $('catElem').addClass('catElem');
    //catElem.className = ('catElem');
    //adds cat name to document
    var catName = $('catElem').append('<h3></h3>');
    //document.createElement('h3');
    $('catName').html('cats[i].name');
    //$(catElem).append(catName);

    //adds cat image to document
    var catImage = $('body').append('<img></img>');
    //document.createElement('img');
    $('catImage').attr('src', 'cats[i].img');
    $('catImage').width('200px');
    //style.width = '200px';
    $('catImage').addClass('catImg');
    $('catElem').append('catImage');

    // added this to better visualize the console.logged element
    $('catImage').attr('id', 'image-' + 'cats[i].id');

    //adds counter to document
    var catCounter = $('body').append('<h4></h4>');
    //document.createElement('h4');
    // added this to better visualize the console.logged element
    $('catCounter').attr('id', 'counter-' + 'cats[i].id');

    $('catCounter').html('cats[i].count');
    $('catElem').append('catCounter');

    $('body').append('catElem');
    //document.body.appendChild(catElem);
  };
};
addCats(cats);


$(document).ready(function() {
 $('img').click(function(){
   var tally = parseInt($(this).next('h4').text());
   tally++;
    $(this).next('h4').text(tally++)
   console.log(tally);
   console.log(this);
 });
});
