<template>
<div class="Pmain">
  <h1 class="text-xs-center"> Welcome</h1>
  <v-container>
    <v-card>
    <v-carousel>
      <v-carousel-item v-for="(image,i) in images" :key="i" :src="image"></v-carousel-item>
    </v-carousel>
    </v-card>
  </v-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data: () => ({
    images: [
      "http://csc3003.com/lab4/2.jpg",
      "http://csc3003.com/lab4/1.jpg",
      "http://csc3003.com/lab4/3.jpg",
      "http://csc3003.com/lab4/4.jpg",
      "http://csc3003.com/lab4/5.jpg",
      "http://csc3003.com/lab4/6.jpg"
    ]
  })
};
</script>

<style scoped>
.Pmain{
  background-color:rgb(71, 51, 51);
  height: 800px;
}
h1{
  
  font-size: 50px;
  font-family: HoeflerText-BlackItalic;

}
.text-xs-center{
  padding: 40px;
  color: white;
}
</style>
