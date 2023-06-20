<template>
  <div>
    <div class="bottomnav">
        <router-link to="/home" custom v-slot="{ home }">
            <button id="home-btn" type="button" @click="home" role="link">
                <font-awesome-icon :icon="['fas', 'home']" size="2x"/>
            </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </router-link>
        
        <router-link to="/profile" custom v-slot="{ profile }">
            <button id="profile-btn" type="button" @click="profile" role="link">
                <font-awesome-icon :icon="['fas', 'user']" size="2x"/>
            </button>
        </router-link>
        <!-- <button type="button" @click="$router.push('/profile')"><font-awesome-icon :icon="['fas', 'user']" size="2x"/></button> -->
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