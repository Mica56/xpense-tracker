<template>
    <div>
      <body>
        <div class="home-container">
          <div class="header">
            <div class="circle"></div>
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="greetingText">
              <router-link to="/login" style="text-decoration: none;color: inherit;">
                <span style="font-size: larger;float: right;"><font-awesome-icon :icon="['fas', 'sign-out-alt']" style="color: #ffffff;"/></span>
              </router-link>
              <span style="font-size: small;">Hello {{ user['Full Name'] }}!</span><br>
              <!--<span style="font-size: larger;"><b>Misty Williams</b></span> -->
            </div>
          </div>
  
          <div id="home">
                <div class="account-balance">
                <div class="balanceInfo">
                    <span class="totalBalance">Account Balance</span>
                    <br>
                    <span style="font-size: x-large;"><b>₱ {{ totalBalance }}</b></span>
                </div>
                <div class="IncomeExpenses">
                        <div class="incomeText">
                            <span style="font-size: small;">Income / Debit</span>
                            <br>
                            <span style="font-size: large;"><b>₱ {{ totalDebit }} </b></span>
                        </div>
                        <div class="expenseText">
                            <span style="font-size: small;">Expenses / Credit</span>
                            <br>
                            <span style="font-size: large;"><b>₱ {{ totalCredit }} </b></span>
                        </div>
                    </div>
                </div>
                <div class="List">
                <b>Transaction History</b>
                </div>
                <div class="transactionHistory">
                    <div class="Transaction" v-for="row in rows" :key="row.index" @click="redirectRead(row)">
                        <span style="display:inline-flex; align-items:center; gap:9px;">
                                <img src="../assets/images/upwork-logo.png" alt="logo1">
                                <span class="translabel">
                                    <label class="transname">{{ row['input-name'] }}</label>
                                    <label class="transdate">{{ row['input-date'] }}</label>
                                </span>
                        </span>

                        <label class="transamt" v-if="row.transaction_type === 'Debit' ">+₱ {{ row['price-input'] }}</label>
                        <label class="transamt" v-else style="color:#FF0000">-₱ {{ row['price-input'] }}</label>
                    </div>
                </div>
            <!-- <div class=""></div> -->
            <router-link :to="{name:'AddTransaction', params:{userCreds: this.user}}">
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
        user: {},
      }
    },
    mounted () {
      this.user = this.$route.params.userCreds || {'user_id':1,'Full Name': 'User'}
      this.pullLatestData()
    },
    computed: {
      totalBalance () {
        let debitSum = 0;
        let creditSum = 0;

        this.rows.forEach ( (e) => {
          if (e.transaction_type === 'Debit') {
            debitSum += e['price-input']
          }
        });
        this.rows.forEach ( (e) => {
          if (e.transaction_type === 'Credit') {
            creditSum += e['price-input']
          }
        });

        let sum = debitSum - creditSum

        return sum.toFixed(2)
      },
      totalCredit () {
        let sum = 0;
        this.rows.forEach ( (e) => {
          if (e.transaction_type === 'Debit') {
          sum += e['price-input']
          }
        });

        return sum.toFixed(2)
      },
      totalDebit () {
        let sum = 0;
        this.rows.forEach ( (e) => {
          if (e.transaction_type === 'Credit') {
            sum += e['price-input']
          }
        });

        return sum.toFixed(2)
      }
    },
    methods: {
      async pullLatestData () {
        axios.get('https://script.google.com/macros/s/AKfycbzRbIy6I2JLfQIzgjuDqQlR7udDlmiX3QkcR_XRcoblVsDzn1rAK0oGP7Fu6Mp9jlMv/exec?user_id='+this.user.user_id)
        .then((response) => {
          console.log(response)
          this.rows = response.data
        })
      },
      redirectRead (e) {
        if (e.transaction_type === 'Credit') {
              this.$router.push({
                name: "TransExpense",
                params: {
                  data: {...e}
                }
              })
        }
        else {
            this.$router.push({
              name: "TransIncome",
              params: {data: {...e}}
            })
        }
      },
    },
};
</script>

<style>
* {
    font-family: 'Poppins';
  }
  
  .home-container {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
  
  #home {
    display: flex;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  
  .transactionHistory {
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    top: 400px;
    justify-content: space-between;
    background-color: #ffffff;
    transform: translate(0%, 0%);
    overflow:hidden; 
    overflow-y:scroll;
    z-index: 1;
  }
  
  .fa-home {
    color: #549994;
  }
  
  .fa-user {
    color: #AAAAAA;
  }

</style>
  

