<template>
    <div>
      <body>
        <div class="login-container">
          <div id="login">
            <div class="LoginBox">
              <h1 class="LoginText">ExpenseTrack</h1>
              <form method="post">
                <div class="txt_field">
                  <input type="text" required v-model="selectedEmail">
                  <span></span>
                  <label>Email</label>
                </div>
                <div class="txt_field">
                  <input type="password" required v-model="selectedPassword">
                  <label>Password</label>
                </div>
    <!-- uncommenting this, we don't really have a forget password feature. -->
                <!-- <div class="ForgotPass">Forgot Password?</div>  -->
                <button class="login-button" @click="evaluateCredentials">
                  Login
                </button>
                <b v-if="failedLogin">
                  <p style="color:#ff0000;text-align:center;"> Invalid Credentials! Please Try Again! </p>
                </b>
              </form>
            </div>
          </div>
        </div>
      </body>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Login',
    data () {
      return {
        selectedEmail: '',
        selectedPassword: '',
        usersList: [],
        failedLogin: false,
      }
    },
    created () {
      this.pullLatestData()
    },
    methods: {
      async pullLatestData () {
        axios.get('https://script.google.com/macros/s/AKfycbzRbIy6I2JLfQIzgjuDqQlR7udDlmiX3QkcR_XRcoblVsDzn1rAK0oGP7Fu6Mp9jlMv/exec?classRequest=user')
        .then((response) => {
          console.log(response)
          this.usersList = response.data
        })
      },
      evaluateCredentials (event) {
        event.preventDefault()
        const userEmail = this.selectedEmail
        const userPassword = this.selectedPassword
        const usersList = this.usersList

        let userData = {}
        let userFound = false

        usersList.forEach ( (user) => {
          if (userEmail === user.email && userPassword === user.Password) {
            userFound = true
            userData = user
          }
        });

        console.log(userFound)
        if (userFound) {
          this.$router.push({name: 'Home', params: {userCreds: {...userData}}})
        } else {
          this.failedLogin = true
        }
      }
    }
  }
  </script>

  <style scoped>
  * {
    font-family: 'Poppins';
  }
  
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2F7E79;
  }
  
  #login {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
  #apptitle {
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    color: #ffffff;
  }
  
  .login-button{
    width: 100%;
    height: 50px;
    border: 2px;
    background: #438883;
    border-radius: 40px;
    font-size: 18px;
    cursor: pointer;
    color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  .login-button:hover {
    background-color: #f2f2f2;
    color: #429690;
  }
  

  </style>
  
