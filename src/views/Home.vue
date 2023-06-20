<template>
  <div>
    <body>
        <div class="container">
            <div class="header">
                <div class="circle"></div>
                <div class="circle1"></div> 
                <div class="circle2"></div>
            </div>
            <NavMenu></NavMenu>
        </div>
    </body>
  </div>
</template>

<script>
import NavMenu from '../components/navmenu.vue';

export default {
    name: 'Home',
    components: {
        NavMenu,
    }
}
</script>

<style>
.fa-home {
    color: #549994;
}

.fa-user {
  color: #AAAAAA;
}
</style>