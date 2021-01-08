// Global Object
var AdLottoUK = {
    // Functions
    f: {
        // Pages
        p: {

        },
        // Globals
        g: {
            // Global Reference, mainly used for API Calls that are needed repeatedly
            calls: {}
        }
    },
    // Objects
    o: {
        userData: {
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
        // App Presets
        AppData: {
            // Base URL for API Calls
            baseURL: window.location.origin,
        },
        // Page Ref
        index: null,
        hasPageReloaded: null,
    }
}