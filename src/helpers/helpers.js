window.addEventListener('scroll', handleScroll);

function handleScroll(e){
	const navbar = document.getElementById("navbar");
	if(this.scrollY > 50){		
		navbar.classList.replace("transparent", "normal");
	} else {
		navbar.classList.replace("normal", "transparent");
	}
}
