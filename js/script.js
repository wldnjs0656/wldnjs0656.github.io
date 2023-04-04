/******scroll******/
$(function(){
  $('.nav1').click(function(){
    let offset = $('.textbox').offset(); 
     $('html').animate({scrollTop : offset.top}, 350);

  });
});
$(function(){
  $('.nav2').click(function(){
    let offset = $('.skill').offset(); 
     $('html').animate({scrollTop : offset.top}, 800);

  });
});
$(function(){
  $('.nav3').click(function(){
    let offset = $('.resume').offset(); 
     $('html').animate({scrollTop : offset.top}, 900);

  });
});
$(function(){
  $('.nav4').click(function(){
    let offset = $('.portfolioa').offset(); 
     $('html').animate({scrollTop : offset.top}, 1000);

  });
});
$(function(){
  $('.nav5').click(function(){
    let offset = $('.portfolioc').offset(); 
     $('html').animate({scrollTop : offset.top}, 1400);

  });
});

/****nav*****/
function myFuc(e){
            
  const x = document.getElementById('hamnavi');
  e.classList.toggle('change');
  x.classList.toggle("act");

}



$(function(){
  $('.skills').myskillbar({});
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}



