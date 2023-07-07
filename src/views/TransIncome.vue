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
            </p>  
            
        </div>

        <div class="mainbody">
            <div class="TransactionLogo">
                <img src="../assets/images/upwork-logo.png">
            </div>
            <div class="TransactionInfo">
                <p>
                    <span style="font-size: medium;display:flex;justify-content: center;"><b>Transaction Details</b></span>
                    <!-- <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #000000;"/> -->
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
                <!-- {{transDetails}} -->
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
    },
    // data () {
    //     return {
    //         transDetails: []
    //     }
    // },
    // methods: {
    //     displayData (transData){
    //         this.transDetails = transData;
    //         console.log(this.transDetails);
    //     }
    // },
    
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
      display: flex;
      align-items: center;
      margin-top: 60px;
      padding: 10px;
    }

.mainbody {
    padding: 50px 0;
    top: 165px;
    position: absolute;
    text-align: left;
    border-radius: 30px 30px 0px 0px;
    overflow: hidden !important;
}
.fa-home {
    color: #549994;
}

.fa-user {
    color: #AAAAAA;
}
</style>