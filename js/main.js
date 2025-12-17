//	CORRECT PAGE REFRESH - PREVENT SCROLL TO RECENT GOTO
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

//	MOBILE MENU
document.addEventListener('DOMContentLoaded', () => {
	const hamburgerButton = document.querySelector('.hamburger-button');
	const mobileMenu = document.querySelector('.mobile-menu');

	hamburgerButton.addEventListener('click', () =>
		mobileMenu.classList.toggle('active')
	);


	const mediaQuery = window.matchMedia('(min-width: 960px)');

	mediaQuery.addEventListener('change', e => {
		if (e.matches) {
			mobileMenu.classList.remove('active');
		}
	});
	
});