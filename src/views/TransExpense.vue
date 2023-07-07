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
                <!-- <font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: #ffffff;float: right;"/> -->
            </p>  
            
        </div>

        <div class="mainbody">
            <div class="TransactionLogo">
                <img src="../assets/images/Logo2.png">
            </div>
            <div class="TransactionType">
                <span style="font-size: small; color: #F95B51;"><b>Expense</b></span>
            </div>
            <h2 class="Amount">₱ 263.99</h2>
            <div class="TransactionInfo">
                <p>
                    <span style="margin-right: 175px; font-size: medium;"><b>Transaction Details</b></span>
                    <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #000000;"/>
                </p>
                <div class="Status">
                    <span class="alignleft">Status</span>
                    <span class="alignright" style="color: #F95B51;"><b>Expense</b></span>
                    <div style="clear: both;"></div>
                </div>
                <div class="From">
                    <span class="alignleft">To</span>
                    <span class="alignright">Discord</span>
                    <div style="clear: both;"></div>
                </div>
                <div class="Time">
                    <span class="alignleft">Time</span>
                    <span class="alignright">3:00 AM</span>
                    <div style="clear: both;"></div>
                </div>
                <div class="Date">
                    <span class="alignleft">Date</span>
                    <span class="alignright">March 3, 2022</span>
                    <div style="clear: both;"></div>
                </div>
                <hr style="width:350px;">
                <div class="Earnings">
                    <span class="alignleft">Spendings</span>
                    <span class="alignright"><b>₱ 263.99</b></span>
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
    name: 'TransExpense',
    components: {
        NavMenu,
    }
}
</script>

<style scoped>
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

/* .mainbody{
    padding: 50px 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    left: 0px;
    top: 165px;

    border-radius: 30px 30px 0px 0px;
    overflow: hidden !important;
} */
.fa-home {
    color: #549994;
}

.fa-user {
    color: #AAAAAA;
}
</style>