<template>
  <div>
    <body>
        
        <router-link class="fill-link" to="/onboard">
            <div class="container">
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
    name: "LandingPage",
}
</script>

<style>
.fill-link{
    height: 100%;
    width: 100%;
    text-decoration: none;
}

.container{
    background-color: #2A7C76;
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
    font-size: 50px;
    line-height: 61px;
    color: #f5f5f5;
}

</style>