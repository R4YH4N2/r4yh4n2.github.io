// Vue Component Declaration
AdLottoUK.o.pages.logIn = Vue.component('LogIn', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/logIn.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'LogIn',
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