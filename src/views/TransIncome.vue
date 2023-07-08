<template>
  <body>
    <div class="transdetail-container">
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
                <div class="TransactionInfo-Stack">
                    <div class="Status">
                        <span class="alignleft">Status</span>
                        <span class="alignright" style="color: #438883;"><b>Income/ Debit</b></span>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="From">
                        <span class="alignleft">Transaction Name</span>
                        <span class="alignright">{{ transDetails['input-name'] }} </span>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="From">
                        <span class="alignleft">Transaction Type</span>
                        <span class="alignright">{{ transDetails['expense_type'] }} </span>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="Time">
                        <span class="alignleft">Time</span>
                        <span class="alignright">{{ detailTime }}</span>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="Date">
                        <span class="alignleft">Date</span>
                        <span class="alignright"> {{ detailDate }}</span>
                        <div style="clear: both;"></div>
                    </div>
                    <hr style="width:350px">
                    <div class="Earnings">
                        <span class="alignleft">Earnings</span>
                        <span class="alignright"><b>₱ {{ transDetails['price-input'] }} </b></span>
                        <div style="clear: both;"></div>
                    </div>
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
    },
    data () {
        return {
          transDetails: {}
         }
     },
     mounted () {
      this.transDetails = this.$route.params.data
     },
     computed: {
       detailDate () {
        const dateObj = new Date(this.transDetails['input-date'])

        return dateObj.toDateString()
        },
        detailTime () {
          const dateObj = new Date(this.transDetails['input-date'])

          return dateObj.toLocaleTimeString() 
        }
     },
    // methods: {
    //     displayData (transData){
    //         this.transDetails = transData;
    //         console.log(this.transDetails);
    //     }
    // },
    
}
</script>

<style>
.TransactionInfo-Stack {
  text-align: center;
  padding: 0 35px;
  margin-bottom: 30px;
  transform: translate(0%, 10%);
}

  .transdetail-container {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
</style>

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
