<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
            <div class="circle"></div>
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="greetingText">
                <span style="font-size: small;">Good afternoon,</span><br>
                <span style="font-size: larger;"><b>Misty Williams</b></span>
                <span><font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: #ffffff;float: right;"/></span>
            </div>

        </div>


        <div class="mainbody">
            <div class="List">
                <b>Transaction History</b>
                <button class="seeMoreBtn">See all</button>        
            </div>
            <div class="box">
                <div class="balanceInfo">
                    <span class="totalBalance">Total Balance</span>
                    <font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: #ffffff;float: right;"/>
                    <br>
                    <span style="font-size: x-large;"><b>₱100,000.00</b></span>
                </div>
                <div class="IncomeExpenses">
                    <div class="incomeText">
                        <span style="font-size: small;">Income</span>
                        <br>
                        <span style="font-size: large;"><b>₱500.00</b></span>
                    </div>
                    <div class="expenseText">
                        <span style="font-size: small;">Expenses</span>
                        <br>
                        <span style="font-size: large;"><b>₱22,000.55</b></span>
                    </div>
                </div>
            </div>
            <div class="TransactionHistory">
                
                <!-- <div class="Transaction">
                    <span style="display:inline-flex; align-items:center; gap:9px;">
                        <img src="../assets/images/upwork-logo.png" alt="logo1">
                        <span class="translabel">
                            <label class="transname">Upwork</label>
                            <label class="transdate">Today</label>
                        </span>
                        <label class="transamt">+₱850.00</label>
                    </div> -->
                    
                    <!-- when clicked, it should direct and passed the row data to transexpense/transincome view-->
                    <div class="Transaction" v-for="row in rows" :key="row.index" v-on:click="clickedEvent()">
                        <span style="display:inline-flex; align-items:center; gap:9px;">
                                <img src="../assets/images/upwork-logo.png" alt="logo1">
                                <span class="translabel">
                                    <label class="transname">{{ row['input-name'] }}</label>
                                    <label class="transdate">{{ row['input-date'] }}</label>
                                </span>
                        </span>
                        <label class="transamt">+₱ {{ row['price-input'] }}</label>
                    </div>
                    <!--
                    <div class="Transaction">
                        <span style="display:inline-flex; align-items:center; gap:9px;">
                            <img src="../assets/images/youtube-logo.png" alt="logo1">
                            <span class="translabel">
                                <label class="transname">Youtube</label>
                                <label class="transdate">Jan 16, 2022</label>
                            </span>
                        </span>
                        <label class="transamt">-₱120.99</label>
                    </div>
                    -->
                </div>
                
                <!-- <router-link to="/addtransact" custom v-slot="{ navigate }">
                    <button class="newTransactionButton" @click="navigate">
                        <span class="plus">+</span>
                    </button>
                </router-link> -->
                <router-link to="/addtransact">
                    <button class="newTransactionButton"><span class="plus">+</span></button>
                </router-link>
            </div>
            
            
            <NavMenu></NavMenu>
        </div>
        
    </body>
  </div>
</template>

<script>
import axios from 'axios';
import NavMenu from '../components/navmenu.vue';

export default {
    name: 'Home',
    components: {
        NavMenu,
    },
    data () {
      return {
        rows: [],
      }
    },
    mounted () {
      this.pullLatestData()
    },
    methods: {
      async pullLatestData () {
        axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=x9TjYPnJBXtUIMepCpbAaXL_MZNoq8XoCrKN2UeodXzuTCh_omGNAYIBxERO1x1yqEvv7-rmZYCL6CXfO6CylpO_VfG8Lwtum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDqK8jVvBXp9fpjbyJP-wHDAwzk2lY8GtIG9xSFsYMcBRKZwNFLSXmEDt_icz4ystJVeNNTa_XY5uDfOU_W1phOUl5bkwRZ_jw&lib=M3Un0O6LJxLlY9N7wsRNDEi_nbiigEm_c')
        .then((response) => {
          console.log(response)
          this.rows = response.data
        })
      },
      clickedEvent () {
        this.$router.push('/transincome');
        // this.$emit('rowData', row);
      }
    },
}

</script>

<style>
* {
    font-family: 'Poppins';
}

.fa-home {
    color: #549994;
}

.fa-user {
  color: #AAAAAA;
}
</style>
