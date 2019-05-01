<template>
<v-card class="P">
  <v-img :src="photo_url" height="250px" width = "250px"></v-img>
  <h1>{{this.title}} </h1>

    <div class="text-xs-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="rgb(71, 51, 51)"
            dark
            v-on="on"
          >
            Info
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title
            class="headline brown rgb(71, 51, 51)"
            
            primary-title
          >
            Item Description
          </v-card-title>
  
          <v-card-text>
            artificial flavors, and sweeteners are added to enhance the taste of food. Food colors maintain or improve appearance. Emulsifiers, stabilizers and thickeners give foods the texture and consistency consumers expect. Leavening agents allow baked goods to rise during baking. Some additives help control the acidity and alkalinity of foods, while other ingredients help maintain the taste and appeal of foods with reduced fat content.
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="rgb(71, 51, 51)"
              flat
              @click="dialog = false"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   </div>
</v-card>
</template>

<script>
export default {
    Name: "Photo",
    props: {
      title: String,
      photo_url: String
    },
    data () {
      return {
        dialog: false
      }
    }
}
</script>

<style>

</style>


