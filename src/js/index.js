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
        isSignedIn: AdLottoUK.o.userData.isSignedIn,
    },
    methods: {
        /* Open when someone clicks on the span element */
        openNav: function () {
            document.getElementById("navBar").style.width = "100%";
        },
        /* Close when someone clicks on the "x" symbol inside the overlay */
        closeNav: function () {
            document.getElementById("navBar").style.width = "0%";
            console.log("CLOSED NAV");
        },
    },
    router,
})