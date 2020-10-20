const nav = document.querySelector('#nav');

document.body.addEventListener('click', (e) => {
	const navToggle = document.querySelector('.nav-toggle');
	const svg = document.querySelector('#hamburger-svg');
	const path = svg.children[0];

	if (e.target !== navToggle && e.target !== svg && e.target !== path) {
		nav.classList.remove('checked');
	} else {
		nav.classList.toggle('checked');
	}
});
