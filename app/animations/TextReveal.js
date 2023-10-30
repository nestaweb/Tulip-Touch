import {gsap} from "gsap";
import SplitType from 'split-type'
import Observer from "../classes/Observer";

export default class TextReveal extends Observer{
	constructor({ element }) {
		super({ element });
		this.element = element;

		const splitted = new SplitType(element, {types: 'words'});
		this.splitWords = new SplitType(splitted.words, {types: 'words'});
	}

	onEnter() {
		gsap.to(this.splitWords.words, {
			y: '0%',
			duration: 1.2,
			stagger: 0.02,
			ease: 'power3.out'
		});
	}

	onLeave() {
		gsap.set(this.splitWords.words, {
			y: '100%',
			duration: 1.2,
			stagger: 0.02,
			ease: 'power3.out'
		});
	}
}