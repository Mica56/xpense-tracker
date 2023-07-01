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
                <span style="font-size: larger;"><b>Nikkun</b></span>
            </div>

        </div>


        <div class="mainbody">
            <div class="TransactionHistory">
                <div class="List">
                    <p>
                        <b>Transaction History</b>
                    </p>
                    <button class="seeMoreBtn">See all</button>
                </div>

                <div class="Transaction1" v-for="(row, index) in rows">
                  <div>
                    Transaction Date: {{ row['input-date'] }} | Name: {{ row['input-name'] }} | Amount/Price: {{ row['price-input'] }}
                  </div>
                </div>
            </div>
            <router-link to="/addtransact" custom v-slot="{ navigate }">
              <button class="newTransactionButton" @click="navigate">
              <!-- <button class="newTransactionButton" @click="$router.push('/addtransact')"> -->
                  <span class="plus">+</span>
              </button>
            </router-link>
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
    },
}

</script>

<style>
.fa-home {
    color: #549994;
}

.fa-user {
  color: #AAAAAA;
}
</style>
