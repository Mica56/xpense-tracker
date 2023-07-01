<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
                <div class="circle"></div>
                <div class="circle1"></div> 
                <div class="circle2"></div>
                <p class="foreground-text">
                  <router-link to="/home" style="text-decoration: none;color: inherit;">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;"/>
                  </router-link>
                    <span style="margin-left: 100px; font-size: large;">Profile</span>
                </p>
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
                        <font-awesome-icon :icon="['fas', 'history']" size="2x" style="color: #666666;"/>
                        <span>Transaction History</span>
                    </p>
                </router-link>

                <router-link to="/addtransact" style="text-decoration: none;color: inherit;">
                    <p class="transact-list">
                        <font-awesome-icon :icon="['fas', 'plus']" size="2x" style="color: #666666;"/>
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
.foreground-text {
  position: relative;
  margin: 2rem;
  display: flex;
  align-items: center;
}

.foreground-text i {
  margin-right: 20px;
}

.main-body {
  padding: 50px 0;
  text-align: center;
  overflow: hidden !important;
  z-index: auto;
  z-index: 1;
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