<template>
    <div>
<v-app>

    <v-toolbar>
      <v-toolbar-title>My website</v-toolbar-title><v-spacer/>
        <v-btn icon  @click.native.stop="modalModel=true"><v-icon>search</v-icon></v-btn>
      <v-text-field type="search" placeholder="search..." />

  </v-toolbar>
 
    
  </v-app>
</div>
</template>

<script>
export default {
    
  data(){
    return {
      modalModel:false
    }
  },
  created(){
      
  }
}
</script>

<style>

</style>