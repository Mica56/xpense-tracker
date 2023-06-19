<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
            <div class="circle"></div>
            <div class="circle1"></div> 
            <div class="circle2"></div>
            <div class="foreground-text">
                <i class="fa-solid fa-chevron-left" style="color: #ffffff; float: left;"></i>
                <span style="flex: 1; text-align: center; font-size: large;">Add Transaction</span>
                <i class="fa-solid fa-ellipsis" style="color: #ffffff; float: right;"></i>
            </div>
            </div>

            <div class="main-body">
            <div class="add-transaction">
                
                    <!--
                <form>
                    <label>Name</label>
                    <select id="expense-name" class="inputfield">
                    <option style="background-image: url(images/netflix.png);" value="Netflix Subscription">Netflix Subscription</option>
                    <option value="Youtube Premium">Youtube Premium</option>
                    </select>
                    <label>Amount</label>
                    <input type="text" class="inputfield">
                    <label>Date</label>
                    <input type="date" class="inputfield">
                    <label>Expense Type</label>
                    <select id="expense-type" class="inputfield">
                    <option value="Leisure Expense">Leisure Expense</option>
                    <option value="Travel Expense">Travel Expense</option>
                    </select>
                    <label>Amount</label>
                    <select id="leisure-type" class="inputfield">
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                    </select>

                    <input type="submit" class="buttone" value="SAVE">
                    <input type="button" class="buttone" value="CANCEL">
                </form>-->
                <form>
                <label>Name</label>
                <div class="dropdown">
                    <div id="selectfield">
                    <p id="selecttext">Select Expense Name</p>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                    <ul id="list" class="hide">
                    <li class="options">
                        <img id="logo" src="images/netflix.png">
                        Netflix Subscription
                    </li>
                    <li class="options">
                        <img id="logo" src="images/youtube.png">
                        Youtube Premium
                    </li>
                    </ul>
                </div>
                <label>Amount</label>
                <input type="text" class="inputfield">
                <label>Date</label>
                <input type="date" class="inputfield">
                <label>Expense Type</label>
                <div class="dropdown">
                    <div id="selectfield-expense">
                    <p id="selecttext-expense">Select Expense Type</p>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                    <ul id="list-expense" class="hide1">
                    <li class="options-expense">
                        Leisure Expense
                    </li>
                    <li class="options-expense">
                        Travel Expense
                    </li>
                    </ul>
                </div>

                <label>Transaction Type</label>
                <div class="dropdown">
                    <div id="selectfield-transaction">
                    <p id="selecttext-transaction">Select Transaction Type</p>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                    <ul id="list-transaction" class="hide2">
                    <li class="options-transaction">
                        Expense
                    </li>
                    <li class="options-transaction">
                        Income
                    </li>
                    </ul>
                </div>
                
                    

                    <input type="submit" class="buttone" value="SAVE">
                    <input type="button" class="buttone" value="CANCEL">
                </form>
            </div>
            
            
            </div>

            <div class="bottomnav">
            <button type="button"><i class="fa-solid fa-house fa-2x"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button"><i class="fa-solid fa-user fa-2x"></i></button>
            </div>

        </div>
    </body> 
  </div>
</template>

<script>
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
import NavMenu from '../components/navmenu.vue';

export default {
    name: 'AddTransaction',
    components: {
        NavMenu,
    }
}

var selectField = document.getElementById("selectfield");
var selectText = document.getElementById("selecttext");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");

selectField.onclick = function () {
list.classList.toggle("hide");
}

for (option of options) {
option.onclick = function () {
    var imageElement = document.createElement("img");
    selectText.innerHTML = "";
    selectText.innerHTML += this.innerHTML;
    list.classList.toggle("hide");
};
}

// FOR eXPENSE TYPE DROPDOWN
var selectFieldExpense = document.getElementById("selectfield-expense");
var selectTextExpense = document.getElementById("selecttext-expense");
var optionsExpense = document.getElementsByClassName("options-expense");
var listExpense = document.getElementById("list-expense");

selectFieldExpense.onclick = function () {
listExpense.classList.toggle("hide1");
}

for (option of optionsExpense) {
option.onclick = function () {
    selectTextExpense.innerHTML = this.innerHTML;
    listExpense.classList.toggle("hide1");
};
}

// FOR TRANSACTION TYPE DROPDOWN
var selectFieldTransaction = document.getElementById("selectfield-transaction");
var selectTextTransaction = document.getElementById("selecttext-transaction");
var optionsTransaction = document.getElementsByClassName("options-transaction");
var listTransaction = document.getElementById("list-transaction");

selectFieldTransaction.onclick = function () {
listTransaction.classList.toggle("hide2");
}

for (option of optionsTransaction) {
option.onclick = function () {
    selectTextTransaction.innerHTML = this.innerHTML;
    listTransaction.classList.toggle("hide2");
};
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
    @import url('https://fonts.gstatic.com');
    @import url('https://fonts.googleapis.com');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>