// Vue Component Declaration
AdLottoUK.o.pages.signUp = Vue.component('SignUp', function (resolve, reject) {
    // Loads html page content
    fetch('./src/html/pages/signUp.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'SignUp',
                template: html,
                data() {
                    return {
                        userFirstName: null,
                        userLastName: null,
                        userEmailAddress: null,
                        userConfirmEmailAddress: null,
                        userTelephoneNumber: null,
                        signInStatus: null,
                    }
                },
                methods: {
                    initialise: function () {

                    },
                    userCheckDetails: function () {
                        let self = this;
                        if (self.userFirstName != null && self.userLastName != null && self.userEmailAddress == self.userConfirmEmailAddress) {
                            let _userDetailsObj = {
                                firstName: self.userFirstName,
                                lastName: self.userLastName,
                                emailAddress: self.userEmailAddress,
                                telephone: self.userTelephoneNumber
                            }
                            self.userSignUpGranted(_userDetailsObj);
                        } else {
                            self.signInStatus = "Sign Up Failed. Please Complete The Required Fields";
                            document.getElementById('signInStatus').className = "text-danger";
                        }
                    },
                    userSignUpGranted: function (_userDetailsObj) {
                        // PHP To Database
                        console.log("Sign in successful");
                        self.signInStatus = "Sign in Successful";
                    }
                },
                mounted() {
                    this.initialise();
                }
            })
        })
    })
})