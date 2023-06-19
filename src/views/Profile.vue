<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
                <div class="circle"></div>
                <div class="circle1"></div> 
                <div class="circle2"></div>
                <p class="foreground-text">
                    <i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>
                    <span style="margin-left: 100px; font-size: large;">Profile</span>
                </p>
            </div>
                    
            <div class="main-body">
                <div class="avatar-profile">
                    <img src="images/profile.png">
                </div>
                <h2 class="account-name">Misty Williams</h2>
                <span class="username">@mistywilliams96</span> <br> <br>

                <hr style="width:350px">
                
                <p class="transact-list">
                    <i class="fa-solid fa-user fa-2x" style="color: #666666;"></i>
                    <span>&nbsp;Account Information</span>
                </p>
                
                <p class="transact-list">
                    <i class="fa-solid fa-clock-rotate-left fa-2x" style="color: #666666;"></i>
                    <span>Transaction History</span>
                </p>
                
                <p class="transact-list">
                    <i class="fa-solid fa-plus fa-2x" style="color: #666666;"></i>
                    <span>&nbsp;Add Transaction (Expense/Income)</span>
                </p>
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
    @import url('https://fonts.gstatic.com');
    @import url('https://fonts.googleapis.com');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>