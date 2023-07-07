<template>
  <div>
    <body>
        
        <router-link class="fill-link" to="/onboard">
            <div class="landing-container">
                <div id="landing">     
                    <h1 id="apptitle">ExpenseTrack</h1>
                </div>
            </div>
            
        </router-link>
        
    </body>
  </div>
</template>


<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/onboard');
    }, 3000);
  }
}
</script>

<!--
<script>
export default {
    name: "LandingPage",
}
</script>
-->

<style>
.fill-link{
    height: 100%;
    width: 100%;
    text-decoration: none;
}

.landing-container{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2A7C76 !important;
}

#landing {
    width: 100%;
    position:absolute;
    text-align: center;
    justify-content: center;
    top: 50%;
    transform: translate(0, -50%);
}

#apptitle {
    font-weight: 700;
    font-size: clamp(3rem, 0.0439rem + 3.6952vw, 5rem);
    line-height: 61px;
    color: #f5f5f5;
}

</style>