<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
            <div class="circle"></div>
            <div class="circle1"></div> 
            <div class="circle2"></div>
            <router-link to="/home" style="text-decoration: none;color: inherit;">
                  <font-awesome-icon :icon="['fas', 'chevron-left']" class="back" style="color: #ffffff;float: left;"/>
            </router-link>
            <div class="foreground-text">
                <span style="flex: 1; text-align: center; font-size: large;">Add Transaction</span>
            </div>
            </div>

            <div class="main-body">
              <div class="add-transaction">
                <form class="gform pure-form pure-form-stacked" method="POST" data-email="" @submit.prevent="createTransaction" action="https://script.google.com/macros/s/AKfycbwxUrtZCfje7pLaoUG_ENSe_w7N6K0XfYxry1Nsr0qcc-h49p2ZRslWkkukWlW8T_5u/exec">
                <label>Name</label>
                <input type="text" v-model="inputs.name" class="inputfield" placeholder="Enter name" id="input-name" name="input-name">
                <label>Amount</label>
                <div class="price-input">
                    <input type="number" v-model="inputs.amount"class="inputfield" id="price-input" name="price-input" placeholder="Enter price" min="0">
                </div>
                <label>Date</label>
                <input type="date" v-model="inputs.dateInput"class="inputfield" name="input-date" id="input-date">
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
                    <select id="selectfield-expense" v-model="selected_ET" @input="storeExpType(selected_ET)" name="expense_type">
                        <option value="" id="selecttext-expense" disabled selected>Select Expense Type</option>
                        
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
                    
                    <select id="selectfield-transaction" v-model="selected_TT" @input="storeTransType(selected_TT)" name="transaction_type">
                        <option value="" id="selecttext-transaction" disabled selected>Select Expense Type</option>
                        <option id="list-transaction" v-for="option in optionsTransact" :key="option.value">
                            {{option.name}}
                        </option>
                        
                    </select>
        
                </div>
                    <div style="text-decoration: none;color: inherit;">
                        <input type="submit" class="buttone" value="SAVE" :disabled="isNotEmptyFields" 
                        v-bind:class="isNotEmptyFields ? 'save-disabled' : 'buttone'">
                        <router-link to="/home" style="text-decoration: none;color: inherit;">
                          <input type="button" class="buttone" value="CANCEL">
                        </router-link>
                    </div>
                    
                </form>
              </div>
            </div>
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
    mounted () {
      this.user = this.$route.params.userCreds || {'Full Name': 'User', 'user_id':1}
    },
    data() {
    return {
        inputs: {
          name: '',
          amount: 0,
          dateInput: '',
        },
        user: {},
        selected_ET: null,
        optionsExpense: [
            {"value": 'A', "name": "Gcash Cash In"},
            {"value": 'B', "name": "Salary"},
            {"value": 'C', "name": "Money Transfer"},
            {"value": 'D', "name": "Food"},
            {"value": 'E', "name": "Transfer Payments"},
            {"value": 'F', "name": "Travel Expenses"},
            {"value": 'G', "name": "Load Transaction"},
        ],
        selected_TT: null,
        optionsTransact: [
            {"value": 1, "name": "Debit"},
            {"value": 2, "name": "Credit"},
        ],
    }
    },
    computed: {
      isNotEmptyFields () {
        return !Boolean(this.inputs.name && this.inputs.amount && this.inputs.dateInput && this.selected_ET && this.selected_TT)
      }
    },
    methods: {
      storeExpType(selected_ET) {
          console.log(selected_ET) 
      },
      storeTransType(selected_TT) {
      console.log(selected_TT) 
      },
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

        formData['user_id'] = this.user.user_id
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

        const userData = this.user
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              // REDIRECT TO TRANSACTIONS LIST PAGE
              console.log(userData)
              this.$router.push({ path: '/home',params: {userCreds: {...userData}}})

            }
        };

        var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');

        xhr.send(encoded);
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
};

</script>

<style scoped>
    .main-body {
      width: 100%;
      height: 100%;
      background-color: #ffffff;
    }

    .back {
      position: absolute;
      margin-top: 65px;
      text-align: left;
      padding: 10px;
      z-index: 1;
    }

    .foreground-text {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 60px;
      padding: 10px;
    }

    .foreground-text span {
      position: relative;
      width: 100%;
      justify-content: center;
    }

    .main-body {
    display: flex;
    text-align: left;
    justify-content: center;
    overflow: hidden !important;
    }
    
    .fa-home {
    color: #549994;
    }
    .save-disabled {
      background-color:#EBEBE4;
      color: #000;
    }

    .fa-user {
    color: #AAAAAA;
    }
</style>
