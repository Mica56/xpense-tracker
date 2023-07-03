<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
                <div class="circle"></div>
                <div class="circle1"></div>
                <div class="circle2"></div>
                <h3 id="apptitle">ExpenseTrack</h3>
            </div>

            <div class="mainbody">
                <div class="LoginBox">
                    <h1 class="LoginText">Login</h1>
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

<style>
* {
    font-family: 'Poppins';
}


#login {
    width: 414px;
    height: 896px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(132deg, #63B5AF 0%, #438883 100%);
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

#apptitle {
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    color: #ffffff;
    padding: 80px 0px;
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