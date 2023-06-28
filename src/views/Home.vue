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
                <!-- when clicked, it should direct to transexpense/transincome -->
                <div class="Transaction">
                    <span style="display:inline-flex; align-items:center; gap:9px;">
                        <img src="../assets/images/upwork-logo.png" alt="logo1">
                        <span class="translabel">
                            <label class="transname">Upwork</label>
                            <label class="transdate">Today</label>
                        </span>
                    </span>
                    <label class="transamt">+₱850.00</label>
                </div>

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
import NavMenu from '../components/navmenu.vue';

export default {
    name: 'Home',
    components: {
        NavMenu,
    }
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