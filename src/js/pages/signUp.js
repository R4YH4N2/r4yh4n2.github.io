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
                        username: null,
                        userPassword: null,
                        userConfirmPassword: null,
                        userTelephoneNumber: null,
                        signInStatus: null,
                        isSectionOneUserInfo: true,
                        isSectionTwoUserInfo: false,
                        isSectionThreeUserInfo: false,
                    }
                },
                methods: {
                    initialise: function () {

                    },
                    nextInfo: function(_section) {
                        let self=this;
                        if(_section == 'FirstToSecond') {
                            if(self.userFirstName != null && self.userLastName != null) {
                            self.isSectionOneUserInfo = false;
                            self.isSectionTwoUserInfo = true;
                            self.isSectionThreeUserInfo = false;
                            } else {
                                // Enter all details
                            }
                        } else if(_section == "SecondToThird") {
                            if(self.userEmailAddress != null && self.username != null && self.userPassword != null && self.userConfirmPassword != null && self.userPassword == self.userConfirmPassword) {
                            self.isSectionOneUserInfo = false;
                            self.isSectionTwoUserInfo = false;
                            self.isSectionThreeUserInfo = true;
                            } else {
                                // Enter all details
                            }
                        }
                    },
                    userCheckDetails: function () {
                        let self = this;
                        if (self.userFirstName != null && self.userLastName != null && self.userEmailAddress != null && self.userPassword != null && self.userPassword == self.userConfirmPassword) {
                            let _userDetailsObj = {
                                username: self.username,
                                email: self.userEmailAddress,
                                password: self.userPassword,
                                firstName: self.userFirstName,
                                surname: self.userLastName,
                                telephone: self.userTelephoneNumber
                            }
                            self.userSignUpGranted(_userDetailsObj);
                        } else {
                            self.signInStatus = "Sign Up Failed. Please Complete The Required Fields";
                            document.getElementById('signInStatus').className = "text-danger";
                        }
                    },
                    userSignUpGranted: function (_userDetailsObj) {
                        let self=this;
                        // PHP To Database
                        self.setUsers(_userDetailsObj);
                        console.log(_userDetailsObj);
                        self.signInStatus = "Sign in Successful";
                    },
                    setUsers: function (_userDataObj) {
                    return new Promise((resolve, reject) => {
                            $.ajax({
                                url: AdLottoUK.o.AppData.baseURL + "addUser.php",
                                type: "POST",
                                dataType: "json",
                                data: {
                                    Username: _userDataObj.username,
                                    Email: _userDataObj.email,
                                    Password: _userDataObj.password,
                                    FirstName: _userDataObj.firstName,
                                    Surname: _userDataObj.surname,
                                    Telephone: _userDataObj.telephone
                                },
                                success: function (data) {
                                    console.log("User signed up");
                                    resolve(data);
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    console.log("Error");
                                }
                            });
                        });
                    }
                },
                mounted() {
                    this.initialise();
                }
            })
        })
    })
})