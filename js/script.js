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
    //adds cat name to document
    var catName = document.createElement('h3');
    catName.innerHTML = cats[i].name;
    catElem.appendChild(catName);

    //adds cat image to document
    var catImage = document.createElement('img');
    catImage.src = cats[i].img;
    catImage.style.width = '200px';
    catImage.className = ("catImg");
    catElem.appendChild(catImage);

    // added this to better visualize the console.logged element
    catImage.id = "image-" + cats[i].id;

    //adds counter to document
    var catCounter = document.createElement('h4');

    catCounter.id = "counter-" + cats[i].id

    catCounter.innerHTML = cats[i].count;
    catElem.appendChild(catCounter);

    //adds counter tally from clicks to document
    catImage.addEventListener('click', (function(currentCat){
      return function(){
        console.log('Click handler fired! Here is the catImage element reference: ', catImage)
        console.log('...and here is the currentCat element reference: ', currentCat)
        catCounter.innerHTML = Number(catCounter.innerHTML)+ 1;
      };
    })(catCounter));
    document.body.appendChild(catElem);
  };
};
addCats(cats);


$(document).ready(function() {
  $('img').click(function(){
    var tally = parseInt($(this).next("h4").text());
    tally++;
    console.log(tally);
    console.log(this);
  });
});
