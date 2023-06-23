<template>
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
                <span style="flex: 1; text-align: center; font-size: large;">Transaction Details</span>
                <font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: #ffffff;float: right;"/>
            </p>  
            
        </div>

        <div class="mainbody">
            <div class="TransactionLogo">
                <img src="../assets/images/Logo1.png">
            </div>
            <div class="TransactionType">
                <span style="font-size: small; color: #438883;"><b>Income</b></span>
            </div>
            <h2 class="Amount">₱ 420.69</h2>
            <div class="TransactionInfo">
                <p>
                    <span style="margin-right: 175px; font-size: medium;"><b>Transaction Details</b></span>
                    <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #000000;"/>
                </p>
                <div class="Status">
                    <span class="alignleft">Status</span>
                    <span class="alignright" style="color: #438883;"><b>Income</b></span>
                    <div style="clear: both;"></div>
                </div>
                <div class="From">
                    <span class="alignleft">From</span>
                    <span class="alignright">Hoshimachi Suisei</span>
                    <div style="clear: both;"></div>
                </div>
                <div class="Time">
                    <span class="alignleft">Time</span>
                    <span class="alignright">11:00 AM</span>
                    <div style="clear: both;"></div>
                </div>
                <div class="Date">
                    <span class="alignleft">Date</span>
                    <span class="alignright">Feb 30, 2022</span>
                    <div style="clear: both;"></div>
                </div>
                <hr style="width:350px">
                <div class="Earnings">
                    <span class="alignleft">Earnings</span>
                    <span class="alignright"><b>₱ 420.69</b></span>
                    <div style="clear: both;"></div>
                </div>
            </div>
        </div>
        <NavMenu></NavMenu>
    </div>
</body>
</template>

<script>
import NavMenu from '../components/navmenu.vue';
export default {
    name: 'TransIncome',
    components: {
        NavMenu,
    }
}
</script>

<style>
.header {
    height: 190px;
    background-color: #429690;
    border-radius: 0 0 100% 100% / 0 0 35% 35%;
    color: #fff;
    text-align: center;
    padding: 20px;
}
.foreground-text {
    position: relative;
    margin: 2rem;
    display: flex;
    align-items: center;
}

.foreground-text font-awesome-icon {
    margin-right: 20px;
}

.mainbody{
    padding: 50px 0;
    position: absolute;
    width: 414px;
    height: 550px;
    left: 0px;
    top: 165px;

    background: #FFFFFF;
    border-radius: 30px 30px 0px 0px;
    overflow: hidden !important;
}
.fa-home {
    color: #AAAAAA
}

.fa-user {
    color: #549994;
}
</style>