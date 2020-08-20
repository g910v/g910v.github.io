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
        leave() {

        },
        enter() {
            
        }
    }]
});