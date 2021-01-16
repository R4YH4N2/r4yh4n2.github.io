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
                        email: null,
                        password: null,
                        errorMessage: null,
                    }
                },
                methods: {
                    initialise: function () {

                    },
                    validateLogin: function () {
                        let self = this;
                        self.getUsers(self.email).then((data) => {
                            for (let i = 0; i < data.length; i++) {
                                if (self.email == data[i].Email) {
                                    if (self.password == data[i].Password) {
                                        let userCredentialsObj = {
                                            username: data[i].Username,
                                            email: data[i].Email,
                                            password: data[i].password,
                                            firstName: data[i].FirstName,
                                            surname: data[i].Surname,
                                            telephone: data[i].Telephone,
                                        }
                                        localStorage.setItem("userData", JSON.stringify(userCredentialsObj));
                                        localStorage.setItem("isSignedIn", JSON.stringify(true));
                                        AdLottoUK.o.index.signInToggle();
                                        self.$router.push("/play");
                                    } else {
                                        self.errorMessage = "Incorrect Password";
                                    }
                                } else {
                                    self.errorMessage = "Incorrect Username";
                                }
                            }
                        });
                    },
                    getUsers: function (_userEmail) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: AdLottoUK.o.AppData.baseURL + "getUserList.php",
                            type: "POST",
                            dataType: "json",
                            data: {
                                Email: _userEmail
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log("Error");
                            }
                        });
                    })
                },
                },
                mounted() {
                    this.initialise();
                }
            })
        })
    })
})