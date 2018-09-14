<template>
  <div class="weather">
    <img alt="Vue logo" src="../assets/logo.png" height="150" width="150">
    <h1>Vue<span style="color: #4EB882">Weather</span></h1>
    <button class="buttonOslo" v-on:click="getWeather('Oslo')">Oslo</button>
    <button class="buttonKristiansand" v-on:click="getWeather('Kristiansand') ">Kristiansand</button>
    <h3>{{location}}
      <span v-if="data.weather">
      <img :src="`http://openweathermap.org/img/w/${data.weather[0].icon}.png`">
      <br />
      {{data.weather[0].description}}
    </span>
    </h3>
    <div v-if="data.main" class="temp">
      {{data.main.temp}}°
    </div>
    <div v-if="error"> {{error}}</div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {

    data() {
      return {
        error: '',
        location: '',
        data: ''
      }
    },

    methods: {
      getWeather: function (location) {
        this.location = location;
        this.data = axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=19026fe429b4298c6dad54698d4559b8&units=metric&q=` + location + ',no')
          .then(res => {
            this.data = res.data;
          })
          .catch(e => {
            this.error = e.message
          })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
