// Vue Component Declaration
AdLottoUK.o.pages.contactUs = Vue.component('ContactUs', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/contactUs.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'ContactUs',
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