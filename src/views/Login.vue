<template>
  <div>
    <body>
        <div id="login" class="container">
            <div class="header">
                <div class="circle"></div>
                <div class="circle1"></div>
                <div class="circle2"></div>
                <h3 class="Title">XPENSE TRACK</h3>
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
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div class="ForgotPass">Forgot Password?

                        </div>
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
.container #login {
    width: 414px;
    height: 896px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(132deg, #63B5AF 0%, #438883 100%);
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.header {
    height: 120px;
    padding: 20px;
    text-align: center;

}

.header h3{
    color: #ffffff;
    padding: 30px 30px;
    font-size: xx-large;
}

input[type="submit"]{
    width: 100%;
    height: 50px;
    border: 2px;
    background: #438883;
    border-radius: 25px;
    font-size: 18px;
    color: #ffffff;
}
</style>