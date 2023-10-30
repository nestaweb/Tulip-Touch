import "../styles/index.scss";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);

class App {
	constructor() {
		document.body.style.opacity = 1;
		this._createLenis();
		this._createHome();
		this._render();
	}

	_createLenis() {

		const targets = document.querySelectorAll('.reveal-type')


		targets.forEach(target => {
			const bg = target.dataset.bgColor
			const fg = target.dataset.fgColor
	
			const text = new SplitType(target, { types: 'chars',  tagName: 'span'})
	
			gsap.fromTo(text.chars, 
				{
					color: bg,
				},
				{
					color: fg,
					duration: 0.3,
					stagger: 0.02,
					scrollTrigger: {
						trigger: target,
						start: 'top 80%',
						end: 'top 40%',
						scrub: true,
						markers: false,
						toggleActions: 'play play reverse reverse'
					}
			})
		});


		const section_1 = document.getElementById("vertical");
		const col_left = document.querySelector(".col_left");
		const timeln = gsap.timeline({ paused: true });

		timeln.fromTo(col_left, {y: 0}, {y: '210vh', duration: 1, ease: 'none'}, 0);

		const scroll_1 = ScrollTrigger.create({
			animation: timeln,
			trigger: section_1,
			start: 'top top',
			end: 'bottom top',
			scrub: true
		});

		const section_2 = document.getElementById("horizontal");
		let box_items = gsap.utils.toArray(".horizontal__item");

		gsap.to(box_items, {
			xPercent: -100 * (box_items.length - 1),
			ease: "sine.out",
			scrollTrigger: {
				trigger: section_2,
				pin: true,
				scrub: 3,
				snap: 1 / (box_items.length - 1),
				end: "+=" + section_2.offsetWidth
			}
		});

		
		this.lenis = new Lenis({
			lerp: 0.07
		})
		var slideButtons = document.querySelectorAll('.slide-buttons li');
		var heroSections = document.querySelectorAll('.hero-center-section');
		const shadow0 = document.querySelector('.shadow-0');
		const shadow1 = document.querySelector('.shadow-1');
		const shadow2 = document.querySelector('.shadow-2');
	
		slideButtons.forEach(function(button, index) {
			button.addEventListener('mouseenter', function() {
				if (document.querySelector('.slide-buttons li.active') && document.querySelector('.slide-buttons li.active').classList.contains('active'))
					document.querySelector('.slide-buttons li.active').classList.remove('active');
				if (document.querySelector('.hero-center-section.show') && document.querySelector('.hero-center-section.show').classList.contains('show'))
					document.querySelector('.hero-center-section.show').classList.remove("show");
				heroSections[index].classList.add("show");
				shadow0.style.boxShadow = "0 0 0 300px" + shadow0.dataset.bgColor.split(',')[index];
				shadow1.style.boxShadow = "0 0 0 300px" + shadow1.dataset.bgColor.split(',')[index];
				shadow2.style.boxShadow = "0 0 0 300px" + shadow2.dataset.bgColor.split(',')[index];
				button.classList.add('active');
			});
		});
	
		slideButtons[0].dispatchEvent(new Event('mouseenter'));
		
	}

	_createHome() {
		this.home = new Home();
	}

	_render(time) {
		this.lenis.raf(time);
		ScrollTrigger.update();
		requestAnimationFrame(this._render.bind(this));
	}
}

new App();