<template>
  <div>
    <body>
      <div class="profile-container">
        <div class="header">
          <div class="circle"></div>
          <div class="circle1"></div>
          <div class="circle2"></div>
          <router-link to="/home" style="text-decoration: none;color: inherit;">
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="back" style="color: #ffffff;"/>
          </router-link>
          <div class="foreground-text">
            <span style="flex: 1; text-align: center; font-size: large;">Profile</span>
            <router-link to="/login" style="text-decoration: none;color: inherit;">
              <span style="font-size: larger;float: right;"><font-awesome-icon :icon="['fas', 'sign-out-alt']" style="color: #ffffff;float: right;"/></span>
            </router-link>
          </div>
        </div>

        <div class="main-body">
          <img class="account-profile" src="../assets/images/profile.png">
          <div class="account-details">
            <h2 class="account-name">Anica Arastosa</h2>
            <span class="username">@aniara</span>
            <div class="profile">
              <p><span class="email">Email: </span>anica_23@gmail.com</p> 
              <p><span class="number">Phone number: </span>09389140463 </p> 
              <p><span class="account-type">Account type: </span> Normal</p>
            </div>

            <hr style="width:90%">

            <router-link to="/home" style="text-decoration: none;color: inherit;">
              <p class="transact-list">
                <font-awesome-icon :icon="['fas', 'history']" size="2x" style="color: #549994;"/>
                <span>Transaction History</span>
              </p>
            </router-link>

            <router-link to="/addtransact" style="text-decoration: none;color: inherit;">
              <p class="transact-list">
                <font-awesome-icon :icon="['fas', 'plus']" size="2x" style="color: #549994;"/>
                <span>&nbsp;Add New Transaction</span>
              </p>
            </router-link>
          </div>
        </div>
        <div id="prof-nav">
          <NavMenu></NavMenu>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import NavMenu from '../components/navmenu.vue';

export default {
  name: 'Profile',
  components: {
    NavMenu,
  }
}
</script>

<style>
.profile-container {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
}

.back {
  position: absolute;
  margin-top: 65px;
  text-align: left;
  padding: 10px;
  z-index: 1;
}

.account-details {
  transform: translate(0%, 5%);
}

.email, .number, .account-type {
  color: #549994;
  font-weight: bold;
}

#prof-nav .fa-home {
  color: #AAAAAA
}

#prof-nav .fa-user {
  color: #549994;
}
</style>

<style scoped>
.foreground-text {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 60px;
  padding: 10px;
}

.foreground-text i {
  margin-right: 20px;
}

.main-body {
  padding: 30px 0;
  width: 100%;
  height: 500px;
  text-align: center;
  z-index: auto;
  z-index: 1;
  background-color: #ffffff;
  transform: translate(0%, 0%);
}
</style>