import TextReveal from "../animations/TextReveal";
import Button from "../animations/Button";
import ParallaxImage from "../animations/ParallaxImage";
import Navigation from "../animations/Navigation";
import HeroAnim from "../animations/HeroAnim";
import VerticalAnim from "../animations/VerticalAnim";

export default class Page {
	constructor() {
		this._createTextReveals();
		this._createButtons();
		this._createParallaxImages();
		this._createHeroAnim();
		this._createNavigation();
		this._createVerticalAnim();
	}

	_createTextReveals() {
		const textItems = [...document.querySelectorAll("[data-animation='text-reveal']")];

		textItems.forEach((textItem) => {
			new TextReveal({
				element: textItem
			});
		});
	}

	_createButtons() {
		const buttons = [...document.querySelectorAll("[data-animation='button']")];

		buttons.forEach((button) => {
			new Button({
				element: button
			});
		});
	}

	_createParallaxImages() {
		const images = [...document.querySelectorAll("[data-animation='parallax-image']")];

		images.forEach((image) => {
			new ParallaxImage({
				imageSection: image
			});
		});
	}

	_createHeroAnim() {
		const textItems = [...document.querySelectorAll("[data-animation='hero']")];

		textItems.forEach((textItem) => {
			new HeroAnim({
				element: textItem
			});
		});
	}

	_createNavigation() {
		const nav = document.querySelector("header");

		new Navigation({
			element: nav
		});
	}

	_createVerticalAnim() {
		const verticals = document.querySelectorAll(".vertical__item");

		verticals.forEach(vertical => {
			new VerticalAnim({
				element: vertical
			});
		});
	}
}
