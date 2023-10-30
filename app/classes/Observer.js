export default class Observer {
	constructor({ element }) {
		this.element = element;
		this._createObserver();
	}

	_createObserver() {

		const options = {
			rootMargin: '-30% 0% -30% 0%',
			treshold: 0.5,
		}
		
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting)
					this.onEnter();
				else
					this.onLeave();
			});
		}, options);

		this.observer.observe(this.element);
	}

	onEnter() {}

	onLeave() {}
}