import { gsap } from "gsap";

export default class Navigation {
	constructor({ element }) {
		this.element = element;
		this.elements = document.querySelectorAll(".header__child");

		this._initAnimNavigation();
	}

	_initAnimNavigation() {
		this.elements.forEach((element) => {
			element.style.opacity = 0;
			element.style.transform = "translateY(-100%)";
		})
		setTimeout(() => {
			gsap.to(this.elements, {
				opacity: 1,
				y: '0%',
				duration: 2,
				stagger: 0.05,
				delay: 1,
				ease: 'power3.out'
			});
		}, 3300);
	}
}