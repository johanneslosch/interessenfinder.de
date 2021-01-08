<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <li v-for="user in users" :key="user.id">
    <Interest
      :name="user.name" 
      :description="user.description"
      :inside="user.indoor"
      :allone="user.allone"
    /><br>
    </li>
  </div>
</template>
<!--
<script>

</script>
-->

<script>
import usersData from "./assets/interests.json";
import Interest from './components/Interest.vue'
export default {
  data() {
    return {
      users: usersData,
      };
  },
  name: 'App',
  components: {
    Interest
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul, li {
    list-style-type: none;
}
</style>
