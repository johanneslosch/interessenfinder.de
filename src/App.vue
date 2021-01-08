<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <li v-for="user in users" :key="user.id">
      {{user.name}} 
      <br> 
      {{user.description}}
      <br> 
      Drinnen: {{user.indoor}}
      <br> 
      Alleine: {{user.allone}}
      <br> 
      <br> 
    </li>
<!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>
<!--
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->

<script>
import usersData from "./assets/interests.json";
export default {
  data() {
    return {
      users: usersData,
      };
  },
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
</style>
