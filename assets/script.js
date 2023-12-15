const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//

// Variables

let currentIndex = 0
let currentImage = slides[currentIndex]

let image = document.querySelector(".banner-img")
let texte = document.querySelector("#banner p")


// Création des div pour les dot

let parentElement = document.querySelector(".dots")

for (i = 0; i < slides.length; i++) {

	let nouvelElement = document.createElement("div")
	parentElement.appendChild(nouvelElement)
	nouvelElement.classList.add("dot")
}

let firstChild = document.querySelector(".dots .dot")
firstChild.classList.add("dot_selected")

let dots = document.querySelectorAll(".dot")


//EventListener pour la flèche gauche

let flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", () => {
	
	currentIndex--
	currentImage = slides[currentIndex]

	if (currentIndex < 0 ) {
		currentIndex = slides.length -1
		currentImage = slides[currentIndex]
	}
	
	image.src = "./assets/images/slideshow/" + slides[currentIndex].image
	texte.innerHTML = slides[currentIndex].tagLine

	for (i = 0; i < slides.length; i++) {

		if (i === currentIndex) {
		dots[i].classList.add("dot_selected")	
	}

	else {
		dots[i].classList.remove("dot_selected") 
	}}
})



//EventListener pour la flèche droite

let flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {
	
	currentIndex++
	currentImage = slides[currentIndex]
	
	if (currentIndex > slides.length -1) {
	currentIndex = 0
	currentImage = slides[currentIndex]
	}

	image.src = "./assets/images/slideshow/" + slides[currentIndex].image
	texte.innerHTML = slides[currentIndex].tagLine

	for (i = 0; i < slides.length; i++) {

		if (i === currentIndex) {
		dots[i].classList.add("dot_selected")	
	}

	else {
		dots[i].classList.remove("dot_selected") 
	}}
})

	






