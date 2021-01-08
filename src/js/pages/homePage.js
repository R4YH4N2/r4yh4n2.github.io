// Vue Component Declaration
AdLottoUK.o.pages.homePage = Vue.component('HomePage', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/homePage.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'HomePage',
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