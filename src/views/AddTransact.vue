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
                <font-awesome-icon :icon="['fas', 'ellipsis-h']" style="color: #ffffff;float: right;"/>
            </div>
            </div>

            <div class="main-body">
            <div class="add-transaction">
                <form class="gform pure-form pure-form-stacked" method="POST" data-email="" @submit.prevent="createTransaction" action="https://script.google.com/macros/s/AKfycbwxUrtZCfje7pLaoUG_ENSe_w7N6K0XfYxry1Nsr0qcc-h49p2ZRslWkkukWlW8T_5u/exec">
                <label>Name</label>
                <input type="text" class="inputfield" placeholder="Enter name" id="input-name" name="input-name">
                <label>Amount</label>
                <div class="price-input">
                    <input type="number" class="inputfield" id="price-input" name="price-input" placeholder="Enter price" min="0">
                </div>
                <input type="date" class="inputfield" name="input-date" id="input-date">
                <label>Expense Type</label>
                <div class="dropdown">
                    <div id="selectfield-expense">
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
                    </ul>
                </div>

                <label>Transaction Type</label>
                <div class="dropdown">
                    <div id="selectfield-transaction">
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
                    </ul>
                </div>
                    <input type="submit" class="buttone" value="SAVE">
                    <input type="button" class="buttone" value="CANCEL">
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
    methods: {
      getFormData(form) {
        var elements = form.elements;
        var honeypot;

        var fields = Object.keys(elements).filter(function(k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        }).map(function(k) {
          if(elements[k].name !== undefined) {
            return elements[k].name;
          // special case for Edge's html collection
          }else if(elements[k].length > 0){
            return elements[k].item(0).name;
          }
        }).filter(function(item, pos, self) {
          return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function(name){
          var element = elements[name];
          
          // singular form elements just have one value
          formData[name] = element.value;

          // when our element has multiple items, get their values
          if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
              var item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = 'transactions'; // default sheet name
        formData.formGoogleSendEmail
          = form.dataset.email || ""; // no email by default

        return {data: formData, honeypot: honeypot};
      },
      createTransaction (e) {
        e.preventDefault();
        var form = e.target;
        var formData = this.getFormData(form);
        var data = formData.data;

        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              // REDIRECT TO TRANSACTIONS LIST PAGE
              this.$router.push({ path: '/home' })
            }
        };

        var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(encoded)

        xhr.send(encoded);
      },
    },
}

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
