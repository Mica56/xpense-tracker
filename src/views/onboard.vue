<template>
  <div>
    <body>
        <div class="container">
            <div id="onboard">
                <img id="coin" src="../assets/images/Coin.png" alt="coin">
                <img id="donut" src="../assets/images/Donut.png" alt="donut">
                <h3>spend smarter save more</h3>
                <router-link to="/home" custom v-slot="{ navigate }">
                    <button id="start" @click="navigate">get started</button>
                </router-link>
            </div>
        </div>
    </body>
  </div>
</template>

<script>
export default {
    name: "Onboarding",
}
</script>

<style>
    div #onboard{
        background: url(../assets/images/onboard-bg1.png) no-repeat;
        background-size: cover;
    }
    /* #onboard-upper{
        position: absolute;
        width: 414px;
        height: 600px;
        left: 0px;
        top: 0px; 
        
        background: white;
    } */
    h3{
       position: absolute;
        width: 301px;
        height: 76px;
        left: 56px;
        top: 643px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 38px;

        /* or 106% */
        text-align: center;
        letter-spacing: -0.02em;
        text-transform: capitalize;

        /* GREEN */
        color: #438883;
    }
    #start{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        gap: 10px;

        position: absolute;
        width: 358px;
        height: 64px;
        left: 28px;
        top: 745px;

        background: linear-gradient(180deg, #69AEA9 -17.19%, #3F8782 123.44%);
        border-radius: 40px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 38px;

        /* identical to box height, or 211% */
        text-align: center;
        letter-spacing: -0.02em;
        text-transform: capitalize;
        color: #FFFFFF;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #donut{
        position: absolute;
        width: 167.32px;
        height: 224.94px;
        left: 165px;
        top: 316.32px;
    }
    #coin{
        position: absolute;
        width: 207.13px;
        height: 198.34px;
        left: 91.22px;
        top: 106px;
    }
</style>