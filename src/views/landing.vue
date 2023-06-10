<template>
  <div>
    <body>
        <h1>ExpenseTrack</h1>
        <img id="tagline" src="../assets/tagline.png" alt="tagline">
    </body>
  </div>
</template>

<script>
export default {
    name: "LandingPage",
}
</script>

<style>
    body{
        background-color: #2A7C76;
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