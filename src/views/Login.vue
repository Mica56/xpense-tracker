<template>
    <div>
      <body>
        <div class="login-container">
          <div id="login">
            <div class="LoginBox">
              <h1 class="LoginText">ExpenseTrack</h1>
              <form method="post">
                <div class="txt_field">
                  <input type="text" required>
                  <span></span>
                  <label>Email</label>
                </div>
                <div class="txt_field">
                  <input type="password" required>
                  <label>Password</label>
                </div>
                <div class="ForgotPass">Forgot Password?</div>
                <router-link to="/home" style="text-decoration: none;color: inherit;">
                  <input type="submit" value="Login">
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </body>
    </div>
  </template>
  
  <script>
  export default {
  
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
  
  input[type="submit"]{
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
  
  input[type="submit"]:hover {
    background-color: #f2f2f2;
    color: #429690;
  }
  

  </style>
  