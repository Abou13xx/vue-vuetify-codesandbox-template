<template>
<div class="main">
  <v-container>
    <v-layout justify-center row wrap justify-space-around>
      <Photo title="Eggs $4.00" photo_url="http://csc3003.com/lab4/0.jpg"/>
      <Photo title="Fresh $10.00"  photo_url="http://csc3003.com/lab4/1.jpg"/>
      <Photo title="Pancakes $8.00" photo_url="http://csc3003.com/lab4/2.jpg"/>
      <Photo title="Yogurt $7.00" photo_url="http://csc3003.com/lab4/3.jpg"/>
      <Photo title="Black Coffee $9.00" photo_url="http://csc3003.com/lab4/4.jpg"/>
      <Photo title="Cereal $5.0" photo_url="http://csc3003.com/lab4/5.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/6.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/7.jpg"/>
      <Photo title="Waffle $6.99" photo_url="http://csc3003.com/lab4/8.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/9.jpg"/>
      <Photo title="Juice $6.00" photo_url="http://csc3003.com/lab4/10.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/11.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/12.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/13.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/14.jpg"/>
      <Photo title="try something good" photo_url="http://csc3003.com/lab4/15.jpg"/>
    </v-layout>

  </v-container>
  </div>
</template>

<script>
import Photo from "./Photo";

export default {
  Name: "Menu",
  components: {
    Photo,
  },
  props: {}
  
};


</script>


<style>
.P{
  margin-bottom: 20px;
}
.h{
  padding: 15px;
  font-size: 17px;
}
.main{
  background-color: rgb(71, 51, 51);
}
.button{
  background-color: aqua;
}

</style>


