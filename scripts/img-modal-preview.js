var modal = document.getElementById("myImgModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myModalButton");
var modalImg = document.getElementById("img-container");
var captionText = document.getElementById("img-caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/architecture.png";
  captionText.innerHTML = "This architecture is powered by Amazon Web Services (AWS).";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}