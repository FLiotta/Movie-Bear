window.addEventListener('scroll', handleScroll);

function handleScroll(e){
	const navbar = document.getElementById("navbar");
	if(this.scrollY > 100){		
		navbar.classList.replace("transparent", "normal");
	} else {
		navbar.classList.replace("normal", "transparent");
	}
}
