<template>
  <div>
    <div class="bottomnav">
        <!-- <button id="home-btn" type="button" @click="$router.push('/home')">
            <font-awesome-icon :icon="['fas', 'home']" size="2x"/>
        </button> -->
        <router-link id="home-btn" to="/home" tag="button" >
            <font-awesome-icon :icon="['fas', 'home']" size="2x"/>
        </router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <button id="profile-btn" type="button" @click="$router.push('/profile')">
            <font-awesome-icon :icon="['fas', 'user']" size="2x"/>
        </button> -->
        <router-link id="profile-btn" to="/profile" tag="button" >
            <font-awesome-icon :icon="['fas', 'user']" size="2x"/>
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