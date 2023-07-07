<template>
    <body>
        <div class="container">
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
        background: url(../assets/images/onboard-bg1.png);
        background-repeat:no-repeat;
        background-size: cover;
        text-align: center;
        justify-content: center;
    }

    #coin {
        position: absolute;
        width: 100%;
        max-width: 300px;
        height: auto;
        margin: 0 auto;
        left: 1%;
        top: 2%;
}

    #donut {
        position: absolute;
        width: 100%;
        max-width: 250px;
        height: auto;
        transform: rotate(-10deg);
        right: 8%;
        bottom: 30%;
        margin: 0 auto;
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
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 76px;
        font-weight: 700;
        font-size: clamp(2rem, 0.0439rem + 3.6952vw, 4rem);
        line-height: 38px;
        text-transform: capitalize;
        color: #438883;
}


    #start {
        position: absolute;
        left: 50%;
        top: 90%;
        transform: translate(-50%, -50%);
        width: 85%;
        height: 64px;
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