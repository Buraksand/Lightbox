//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//Add overlay
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src",imageLocation);
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
    $overlay.show();
});

//When overlay is clicked
//Hide the overlay
$overlay.click(function(){
    $(this).hide();
});










