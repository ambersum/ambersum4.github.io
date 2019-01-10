function myFunction(x){
	x.classList.toggle("change");
}
function openNav(){
	document.getElementById("mySidenav").style.width= "250px";
	document.getElementById("main").style.marginLeft= "250px";
	document.body.style.backgroundColor= "rgba(0,0,0,0.4)";
}
function closeNav(){
	document.getElementById("mySidenav").style.width= "0";
	document.getElementById("main").style.marginLeft= "0";
	document.body.style.backgroundColor= "white";
}
/*Mens page*/
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex=n);
}
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex=1}
	if (n < 1) {slideIndex = slides.length}
	for (i=0; i < slides.;ength; i++) {
		slides[i].style.display="none";
	}
	for (i=0; i < dots.length; i++){
		dots[i].className = dots[i].classNmae.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+="active";
}