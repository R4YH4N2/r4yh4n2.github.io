// Vue Component Declaration
AdLottoUK.o.pages.play = Vue.component('Play', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/play.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Play',
                template: html,
                data() {
                    return {

                    }
                },
                methods: {
                    initialise: function () {

                    },
                },
                mounted() {
                    this.initialise();
                }
            })
        })
    })
})