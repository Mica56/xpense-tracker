<template>
  <div>
    <div class="bottomnav">
        <router-link to="/addtransact" custom v-slot="{ home }">
            <button type="button" @click="home">
                <font-awesome-icon :icon="['fas', 'home']" size="2x"/>
            </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </router-link>
        
        <router-link to="/profile" custom v-slot="{ profile }">
            <button type="button" @click="profile">
                <font-awesome-icon :icon="['fas', 'user']" size="2x"/>
            </button>
        </router-link>
        
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavMenu'
}
</script>

<style>

</style>