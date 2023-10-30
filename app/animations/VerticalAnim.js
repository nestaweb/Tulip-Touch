import {gsap} from "gsap";
import Observer from "../classes/Observer";

export default class VerticalAnim extends Observer{
	constructor({ element }) {
		super({ element });
		this.element = element;

		this.img1 = document.querySelector(".vertical__img__1");
		this.img2 = document.querySelector(".vertical__img__2");
		this.img3 = document.querySelector(".vertical__img__3");
	}

	onEnter() {
		this.img1.style.backgroundImage = `url(${this.element.dataset.imgSrc})`;
		this.img2.style.backgroundImage = `url(${this.element.dataset.imgSrc})`;
		this.img3.style.backgroundImage = `url(${this.element.dataset.imgSrc})`;
	}
}