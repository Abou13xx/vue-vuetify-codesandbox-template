<template>
  <v-app>
      <v-toolbar class="head">
        <v-toolbar-title class="title">Abou's Five Star Restaurant</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn class="bTitle" to="/" flat>Home</v-btn> 
        <v-btn class="bTitle" to="/menu" flat>Menu</v-btn>
        <v-btn class="bTitle" to="/info" flat>Info</v-btn>
        </v-toolbar-items>

    </v-toolbar>
     
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-layout class="text-xs-center" column justify-center align-center>
       <h1 class="hello">STAY CONTECTED</h1>
       <p>Join over 110k people who recieve bi-weekly our retaurant news</p> 
       <v-text-field  class="input" label="Enter Email" single-line solo></v-text-field>
       <v-btn @click="myClickFunction()" color="rgb(71, 51, 51)" class="button">Submit</v-btn>
    </v-layout>
     <v-footer class="footer2">&copy; 2019 - Mount Vernon , OH 4575466</v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Photo from "./components/Photo";
export default {
  name: 'App',
  components: {
    Home,
    Info,
    Menu,
    Photo
  },
  data () {
    return {
      //
    }
  },
  methods: {
    myClickFunction: function() {
      let hello = document.querySelector('.hello');
       hello.textContent = "Your email has been received. Thank you!"; 
    }
  }
}
</script>

<style scoped>
.head{
background-color: black;
font-family: Times New Roman;
}
.title{
color:white;
font-size: 100px;

}
.bTitle{
  color: white;
  font-size: 20px; 
}
.text-xs-center{
  background-color:rgb(5, 3, 3);
  justify-content: center;
  font-family: Times New Roman;
  color:white;
}
.footer2{
  flex-direction: column;
  background-color:black;
  color:white;
  font-family: Times New Roman;
  padding: 10px;
}

.button{
  height: 25px;
  color:white;
}
.p{
  font-size: 15px;
}
body{
  font-family: 'Times New Roman', Times, serif;
}
.title{
  font-size: 3em !important;
}
.input{
  width: 500px;
  height: 15px;
  align-items:center;
  margin-top: 35px;
}
</style>