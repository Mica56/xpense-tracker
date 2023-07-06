<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
                <div class="circle"></div>
                <div class="circle1"></div> 
                <div class="circle2"></div>
                <router-link to="/home" style="text-decoration: none;color: inherit;">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" class="back" style="color: #ffffff;"/>
                  </router-link>
                <div class="foreground-text">
                    <span style="flex: 1; text-align: center; font-size: large;">Profile</span>
                </div>
            </div>
                    
            <div class="main-body">
                <div class="avatar-profile">
                    <img src="../assets/images/profile.png">
                </div>
                <h2 class="account-name">Misty Williams</h2>
                <span class="username">@mistywilliams96</span>
                <div class="profile">
                  <p><span class="email">Email: </span>mistywilliams@gmail.com</p> 
                  <p><span class="number">Phone number: </span>09389140463 </p> 
                  <p><span class="account-type">Account type: </span> Normal</p>
                </div>

                <hr style="width:350px">
                
                <!-- <p class="transact-list">
                    <font-awesome-icon :icon="['fas', 'user']" size="2x" style="color: #666666;"/>
                    <span>&nbsp;Account Information</span>
                </p> -->

                <router-link to="/home" style="text-decoration: none;color: inherit;">
                    <p class="transact-list">
                        <font-awesome-icon :icon="['fas', 'history']" size="2x" style="color: #549994;"/>
                        <span>Transaction History</span>
                    </p>
                </router-link>

                <router-link to="/addtransact" style="text-decoration: none;color: inherit;">
                    <p class="transact-list">
                        <font-awesome-icon :icon="['fas', 'plus']" size="2x" style="color: #549994;"/>
                        <span>&nbsp;Add Transaction (Expense/Income)</span>
                    </p>
                </router-link>
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

<style scoped>
.back {
    position: absolute;
    margin-top: 65px;
    text-align: left;
    padding: 10px;
    z-index: 1;
}
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
  padding: 50px 0;
  overflow: hidden !important;
  text-align: center;
  z-index: auto;
  z-index: 1;
}

.email, .number, .account-type {
  color: #549994;
  font-weight: bold;
}

</style>

<style>
#prof-nav .fa-home {
  color: #AAAAAA
}

#prof-nav .fa-user {
  color: #549994;
}
</style>