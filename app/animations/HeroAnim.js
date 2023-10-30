import {gsap} from "gsap";
import SplitType from 'split-type'
import Observer from "../classes/Observer";

export default class TextReveal extends Observer{
	constructor({ element }) {
		super({ element });
		this.element = element;

		this.splitted = new SplitType(element, {types: 'chars'});
	}

	onEnter() {
		gsap.to(this.splitted.chars, {
			opacity: 1,
			delay: 2.8,
			duration: 1.2,
			stagger: 0.1,
			ease: 'power3.out'
		});
	}
}