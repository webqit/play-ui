
/**
 * @imports
 */
import Sequence from '@webqit/play-js/src/animation/Sequence.js';
import play from '@webqit/play-js/src/animation/play.js';


/**
 * ---------------------------
 * Class definitions
 * ---------------------------
 */
export default function(window) {

    /**
     * @list
    */
    const ul = class extends window.HTMLUListElement {
        
        /**
         * Establish a common Timeline.
         *
         * @return void
         */
        connectedCallback() {
            this._params = getAnimParams(this);
            // ----------------
            if (this._params.animIn) {
                this._sequenceA = new Sequence;
                this._sequenceA.play(this._params.animIn, this._params);
            }
            // -----------------
            if (this._params.animInAlt) {
                this._sequenceB = new Sequence;
                this._sequenceB.play(this._params.animInAlt, this._params);
            }
            // --------------
        }

        /**
         * Adds an element to the sequence.
         *
         * @param HTMLElement el
         *
         * @return void
         */
        sequenceAdd(el) {
            Observe(el, this._params.rootMargin, entry => {
                if (entry.isIntersecting) {
                    if (entry.boundingClientRect.top < 0) {
                        if (this._params.animInAlt) {
                            // Top-to-bottom motion
                            this._sequenceB.add(entry.target);
                        }
                    } else if (this._params.animIn) {
                        // Bottom-to-top motion
                        this._sequenceA.add(entry.target);
                    }
                }
            });
        }

    };

    /**
     * @list-item
    */
    const li = class extends window.HTMLLIElement {
		
		/**
		 * This triggers self-replacement
		 * when so defined.
		 *
		 * @return void
		 */
		connectedCallback() {
			if (this.parentNode.sequenceAdd) {
				this.parentNode.sequenceAdd(this);
            }
		}

    };

    /**
     * @list-item
    */
   const div = class extends window.HTMLDivElement {
        
        /**
         * Establish a common Timeline.
         *
         * @return void
         */
        connectedCallback() {
            var params = getAnimParams(this);
            var _params = {...params};
            _params.reverse = !_params.reverse;
            _params.fill = _params.fill === 'forwards' ? 'backwards' : 'forwards';
            // --------------
            var animatingA, animatingB, animating_A, animating_B;
            Observe(this, params.rootMargin, entry => {
                if (entry.isIntersecting) {
                    if (entry.boundingClientRect.top < 0) {
                        if (params.animInAlt && !animatingB) {
                            animatingB = true;
                            // Top-to-bottom motion
                            play(entry.target, params.animInAlt, {...params}).then(() => {
                                animatingB = false;
                            });
                        }
                    } else if (params.animIn && !animatingA) {
                        animatingA = true;
                        // Bottom-to-top motion
                        play(entry.target, params.animIn, {...params}).then(() => {
                            animatingA = false;
                        });
                    }
                } else if (params.autoOffStateReverse) {
                    if (entry.boundingClientRect.top < 0) {
                        if (_params.animInAlt && !animatingB && !animating_B) {
                            animating_B = true;
                            // Top-to-bottom motion
                            play(entry.target, _params.animInAlt, {..._params}).then(() => {
                                animating_B = false;
                            });
                        }
                    } else if (_params.animIn && !animatingA && !animating_A) {
                        animating_A = true;
                        // Bottom-to-top motion
                        play(entry.target, _params.animIn, {..._params}).then(() => {
                            animating_A = false;
                        });
                    }
                }
            });
        }
        
    };

    return {
        ul,
        li,
        div,
    }
};

const Observers = new Map();
const Observe = (el, rootMargin, callback) => {
    if (!Observers.has(rootMargin)) {
        const callbacks = new Map();
        Observers.set(rootMargin, {
            o: new window.IntersectionObserver(entries => {
                entries.forEach(entry => {
                    callbacks.get(entry.target)(entry);
                });
            }, {rootMargin}), 
            c: callbacks,
        });
    }
    var obs = Observers.get(rootMargin);
    obs.c.set(el, callback);
    obs.o.observe(el);
};

const getAnimParams = el => {
    return (el.getAttribute('play-seq') || '').split(';').map(c => c.trim()).filter(c => c).reduce((p, prop) => {
        var [ name, value ] = prop.split(':').map(s => s.trim());
        p[name] = ['duration', 'lag', 'always', 'autoOffStateReverse'].includes(name) ? parseInt(value) : value;
        return p;
    }, {
        lag: 100,
        rootMargin: '0px',
        duration: 200,
        animIn: '',
        animInAlt: '',
        always: true,
        fill: 'forwards',
        easing: 'ease-out',
        cancelForCss: false,
        autoOffStateReverse: false,
    });
};
