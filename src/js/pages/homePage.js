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
                    getStarted: function () {
                        let self = this;
                        let path = AdLottoUK.o.index.signInToggle();
                        if (path == true) {
                            self.$router.push('/play');
                        } else {
                            self.$router.push('/signUp')
                        }
                    }
                },
                mounted() {
                    this.initialise();
                }
            })
        })
    })
})