<template>
    <body>
      <div class="onboard-container">
        <div id="onboard">
          <!--<img id="tagline" src="../assets/images/onboard-bg1.png" alt="tagline">-->
          <img id="coin" src="../assets/images/Coin.png" alt="coin">
          <img id="donut" src="../assets/images/Donut.png" alt="donut">
          <h3 class="tagline">Spend smarter Save more</h3>
        </div>
  
        <!-- <router-link to="/login" custom v-slot="{ navigate }">
                <button id="start" @click="navigate">get started</button>
            </router-link> -->
        <router-link to="/login">
          <button id="start">get started</button>
        </router-link>
        <!-- <router-link id="start" to="/login" tag="button" >get started</router-link> -->
      </div>
    </body>
  </template>
  
  <script>
  export default {
    name: "Onboarding",
  }
  </script>
  
  <style>
  .onboard-container {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  
  #onboard {
    width: 100%;
    height: 100%;
    background: url(../assets/images/onboard-bg1.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    justify-content: center;
    background-color: #f2f2f2;
  }
  
  #coin,
  #donut {
    height: auto;
    filter: drop-shadow(30px 10px 4px #438883);
  }
  
  .tagline {
    position: absolute;
    width: 100%;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-transform: capitalize;
    color: #438883;
    margin-bottom: 10px;
  }
  
  #start {
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, -50%);
    width: 85%;
    display: block;
    padding: 10px;
    border: none;
    background-color: #438883;
    border-radius: 40px;
    cursor: pointer;
    font-weight: 600;
    text-transform: capitalize;
    color: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  #start:hover {
    background-color: #f2f2f2;
    color: #429690;
  }
  
  </style>
  