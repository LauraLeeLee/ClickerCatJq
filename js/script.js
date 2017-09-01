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
    var catElem = document.createElement('div');
    //document.createElement('div');
      $(catElem).addClass('catElem');
      $('body').append(catElem);

    //adds cat name to document
    var catName = document.createElement('h3');
    //$(catElem).append('<h3></h3>');
    $(catName).html(cats[i].name);
    $(catElem).append(catName);
    console.log(catName);

    //adds cat image to document
    var catImage = document.createElement('img');
    //catImage.src = cats[i].img;
    $(catImage).attr('src', 'cats[i].img');
    $(catImage).width('200px');
    //style.width = '200px';
    $(catImage).addClass('catImg');
    $(catElem).append(catImage);

    // added this to better visualize the console.logged element
    $(catImage).attr('id', 'image-' + cats[i].id);
    console.log(catImage);

    //adds counter to document
    var catCounter = document.createElement('h4');
    $(catCounter).html(cats[i].count);
      // added this to better visualize the console.logged element
    $(catCounter).attr('id', 'counter-' + 'cats[i].id');
    $(catElem).append(catCounter);
    console.log(catCounter);
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
