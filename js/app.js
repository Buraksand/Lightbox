//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox


//An image to overlay


//A caption to overlay


//Add overlay
var $overlay = $("<div id='overlay'></div>");
$("body").append($overlay);

var $image = $("<img>");
$overlay.append($image);

var $caption = $("<p></p>");
$overlay.append($caption);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src",imageLocation);
    var captionText = $(this).attr("alt");
    $caption.attr("text", captionText);
    console.log(imageLocation);
    $overlay.show();
});
  //Update overlay with the image linked in the link

  
  //Show the overlay.

  
  //Get child's alt attribute and set caption


//When overlay is clicked

  //Hide the overlay
$overlay.click(function(){
    $(this).hide();
});










