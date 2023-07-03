<template>
    <body>
        <div class="container">
            <div id="onboard">
                <!--<img id="tagline" src="../assets/images/onboard-bg1.png" alt="tagline">-->
                <img id="coin" src="../assets/images/Coin.png" alt="coin">
                <img id="donut" src="../assets/images/Donut.png" alt="donut">
                <h3 class="tagline">Spend smarter Save more</h3>
            </div>
            
            <router-link to="/login" custom v-slot="{ navigate }">
                    <button id="start" @click="navigate">get started</button>
            </router-link>
        </div>
    </body>
</template>

<script>
export default {
    name: "Onboarding",
}
</script>

<style>
* {
    font-family: 'Poppins';
}

    .container {
        background-color: #ffffff;
    }

    #onboard{
        position:absolute;
        width: 100%;
        height: 100%;
        background: url(../assets/images/onboard-bg1.png) no-repeat;
        text-align: center;
        justify-content: center;
    }

    #coin{
        position:relative;
        width: 300px;
        height: 300px;
        float: left;
        top: 50px;
    }

    #donut{
        position:relative;
        width: 250px;
        height: 300px;
        transform: rotate(-10deg);
        top: -50px;
        right: 30px;
        float: right;
        
        
    }
    
    /* #onboard-upper{
        position: absolute;
        width: 414px;
        height: 600px;
        left: 0px;
        top: 0px; 
        
        background: white;
    } */

    .tagline {
        position: absolute;
        width: 70%;
        height: 76px;
        top: 68%;
        left: 65px;
        font-weight: 700;
        font-size: 36px;
        line-height: 38px;
        text-transform: capitalize;
        color: #438883;
    }

    #start{
        position: relative;
        width: 85%;
        height: 64px;
        left: 30px;
        top: 745px;
        border: none;
        background-color: #438883;
        border-radius: 40px;
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        text-transform: capitalize;
        color: #FFFFFF;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    #start:hover {
        background-color: #f2f2f2;
        color: #429690;
    }
    
</style>