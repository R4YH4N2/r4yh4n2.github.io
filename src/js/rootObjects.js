// Global Object
var AdLottoUK = {
    // Functions
    f: {
        // Pages
        p: {
            dataTransfer: null,
        },
        // Globals
        g: {
            // Global Reference, mainly used for API Calls that are needed repeatedly
            calls: {}
        }
    },
    // Objects
    o: {
        AppData: {
            baseURL: "http://localhost:8022/PersonalProjects/AdLotto/src/php/",
        },
        userData: {
            username: null,
            password: null,
            isSignedIn: false,
        },
        // Pages II
        pages: {
            homePage: null,
            signUp: null,
            logIn: null,
            play: null,
            contactUs: null
        },
        // Page Ref
        index: null,
        hasPageReloaded: null,
    }
}