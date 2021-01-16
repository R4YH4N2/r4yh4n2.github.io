const router = new VueRouter({
    // Route Declaration
    routes: [{
        path: '/homePage',
        name: 'HomePage',
        component: AdLottoUK.o.pages.homePage,
    }, {
        path: '/play',
        name: 'Play',
        component: AdLottoUK.o.pages.play,
    }, {
        path: '/signUp',
        name: 'SignUp',
        component: AdLottoUK.o.pages.signUp,
    }, {
        path: '/logIn',
        name: 'LogIn',
        component: AdLottoUK.o.pages.logIn,
    }, {
        path: '/contactUs',
        name: 'ContactUs',
        component: AdLottoUK.o.pages.contactUs,
    }]
})
// Vue Instance
AdLottoUK.o.index = new Vue({
    el: '#app',
    data: {
        isSignedIn: false,
    },
    methods: {
        initialise: function () {
            let self = this;
            self.signInToggle();
            let userCredentials = localStorage.getItem("userData");
            if (JSON.parse(userCredentials).email != null || JSON.parse(userCredentials).email != undefined) {
                console.log("LOG IN CREDENTIALS STORED: " + userCredentials);
                this.$router.push('/myAccount');
            } else {
                console.log("NO USER DETAILS STORED: ");
                this.$router.push('/homePage');
            }
        },
        signInToggle: function () {
            let self = this;
            if (JSON.parse(localStorage.getItem("isSignedIn")) == true) {
                self.isSignedIn = true;
                return true;
            } else {
                self.isSignedIn = false;
                return false;
            }
        },
        /* Open when someone clicks on the span element */
        openNav: function () {
            document.getElementById("navBar").style.width = "100%";
        },
        /* Close when someone clicks on the "x" symbol inside the overlay */
        closeNav: function () {
            document.getElementById("navBar").style.width = "0%";
            console.log("CLOSED NAV");
        },
        logOut: function () {
            let self = this;
            localStorage.clear();
            self.signInToggle();
            location.reload();
        }
    },
    router,
    mounted() {
        let self = this;
        this.$router.push('/homePage');
        self.initialise();
    }
})