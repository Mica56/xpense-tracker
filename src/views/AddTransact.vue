<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
            <div class="circle"></div>
            <div class="circle1"></div> 
            <div class="circle2"></div>
            <div class="foreground-text">
                <router-link to="/home" style="text-decoration: none;color: inherit;">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;float: left;"/>
                </router-link>
                <span style="flex: 1; text-align: center; font-size: large;">Add Transaction</span>
                <!-- <font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: #ffffff;float: right;"/> -->
            </div>
            </div>

            <div class="main-body">
            <div class="add-transaction">
                <form>
                <label>Name</label>
                <input type="text" class="inputfield" placeholder="Enter name">
                <label>Amount</label>
                <div class="price-input">
                    <input type="number" class="inputfield" id="price-input" placeholder="Enter price" min="0">
                </div>
                <input type="date" class="inputfield">
                <label>Expense Type</label>
                <div class="dropdown">
                    <!-- <div id="selectfield-expense">
                        <p id="selecttext-expense">Select Expense Type</p>
                        <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs"/>
                    </div>
                    <ul id="list-expense" class="hide1">
                        <li class="options-expense">
                            Food
                        </li>
                        <li class="options-expense">
                            Transfer Payments
                        </li>
                        <li class="options-expense">
                            Travel Expenses
                        </li>
                        <li class="options-expense">
                            Load Transaction
                        </li>
                    </ul> -->
                    <select id="selectfield-expense" v-model="selected_ET" @input="storeExpType(selected_ET)">
                        <option value="" id="selecttext-expense" disabled selected>Select Expense Type</option>
                        <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs"/>
                        <option id="list-expense" v-for="option in optionsExpense" :key="option.value">
                            {{option.name}}
                        </option>
                    </select>
                </div>

                <label>Transaction Type</label>
                <div class="dropdown">
                    <!-- <div id="selectfield-transaction">
                    <p id="selecttext-transaction">Select Transaction Type</p>
                    <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs"/>
                    </div>
                    <ul id="list-transaction" class="hide2">
                    <li class="options-transaction">
                        Debit
                    </li>
                    <li class="options-transaction">
                        Credit
                    </li>
                    </ul> -->
                    <select id="selectfield-transaction" v-model="selected_TT" @input="storeTransType(selected_TT)">
                        <option value="" id="selecttext-transaction" disabled selected>Select Expense Type</option>
                        <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs"/>
                        <option id="list-transaction" v-for="option in optionsTransact" :key="option.value">
                            {{option.name}}
                        </option>
                    </select>
                </div>
                    <!-- remove this router-link after fixing transaction list -->
                    <router-link to="/transexpense" style="text-decoration: none;color: inherit;">
                        <input type="submit" class="buttone" value="SAVE">
                    </router-link>
                    <router-link to="/home" style="text-decoration: none;color: inherit;">
                        <input type="button" class="buttone" value="CANCEL">
                    </router-link>
                    
                </form>
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
    name: 'AddTransaction',
    components: {
        NavMenu,
    },
    data() {
    return {
        selected_ET: null,
        optionsExpense: [
            {"value": 'A', "name": "Food"},
            {"value": 'B', "name": "Transfer Payments"},
            {"value": 'C', "name": "Travel Expenses"},
            {"value": 'D', "name": "Load Transaction"},
        ],
        selected_TT: null,
        optionsTransact: [
            {"value": 1, "name": "Debit"},
            {"value": 2, "name": "Credit"},
        ],
    }
    },

    methods: {
        storeExpType(selected_ET) {
            console.log(selected_ET) 
        },
        storeTransType(selected_TT) {
        console.log(selected_TT) 
        },
    },
    // var selectField = document.getElementById("selectfield");
    // var selectText = document.getElementById("selecttext");
    // var options = document.getElementsByClassName("options");
    // var list = document.getElementById("list");

    // selectField.onclick = function () {
    // list.classList.toggle("hide");
    // }

    // for (option of options) {
    // option.onclick = function () {
    //     var imageElement = document.createElement("img");
    //     selectText.innerHTML = "";
    //     selectText.innerHTML += this.innerHTML;
    //     list.classList.toggle("hide");
    // };
    // }

    // // FOR eXPENSE TYPE DROPDOWN
    // var selectFieldExpense = document.getElementById("selectfield-expense");
    // var selectTextExpense = document.getElementById("selecttext-expense");
    // var optionsExpense = document.getElementsByClassName("options-expense");
    // var listExpense = document.getElementById("list-expense");

    // selectFieldExpense.onclick = function () {
    // listExpense.classList.toggle("hide1");
    // }

    // for (option of optionsExpense) {
    // option.onclick = function () {
    //     selectTextExpense.innerHTML = this.innerHTML;
    //     listExpense.classList.toggle("hide1");
    // };
    // }

    // // FOR TRANSACTION TYPE DROPDOWN
    // var selectFieldTransaction = document.getElementById("selectfield-transaction");
    // var selectTextTransaction = document.getElementById("selecttext-transaction");
    // var optionsTransaction = document.getElementsByClassName("options-transaction");
    // var listTransaction = document.getElementById("list-transaction");

    // selectFieldTransaction.onclick = function () {
    // listTransaction.classList.toggle("hide2");
    // }

    // for (option of optionsTransaction) {
    // option.onclick = function () {
    //     selectTextTransaction.innerHTML = this.innerHTML;
    //     listTransaction.classList.toggle("hide2");
    // };
    // }
};
</script>

<style>
    .foreground-text {
    display: flex; 
    align-items: center; 
    margin: 2rem;
    }

    .main-body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden !important;
    }
    
    .fa-home {
    color: #549994;
    }

    .fa-user {
    color: #AAAAAA;
    }
</style>