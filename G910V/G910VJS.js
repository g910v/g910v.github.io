new Vue ({
	el: '#ForMenu',
	data: {
		show: false
	}
})

new Vue ({
	el: '.MainSection',
	data: {
		CurrentAlbom: 1
	}
})

barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
              	opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
            	opacity: 0
            });
        }
    }]
});