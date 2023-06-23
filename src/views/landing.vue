<template>
  <div>
    <body>
        <div class="container">
        <router-link class="fill-link" to="/onboard">
            <div id="landing">     
                <h1>ExpenseTrack</h1>
                <img id="tagline" src="../assets/images/tagline.png" alt="tagline">
            </div>
        </router-link>
        </div>
    </body>
  </div>
</template>

<script>
export default {
    name: "LandingPage",
}
</script>

<style>
    div #landing{
        margin: 0;
        padding: 100%;
        background-color: #2A7C76;
    }
    .fill-link{
        display: block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: inherit
    }
    h1{
        position: absolute;
        width: 324px;
        height: 61px;
        left: 44px;
        top: 417px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 61px;

        /* identical to box height */
        text-align: center;
        letter-spacing: -0.04em;

        color: #FFFFFF;
    }
    #tagline{
        position: absolute;
        width: 301px;
        height: 76px;
        left: 57px;
        top: 497px;
        object-position: center;
    } 
</style>