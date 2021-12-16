<template>
<div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="Images\Petiscos.png"
    ></v-img>

    <v-card-title>Entradas</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >        
      </v-row>

      

      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>  
    
      
    
  </v-card>

  

  
</div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    
  }
</script>