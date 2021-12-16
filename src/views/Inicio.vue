<template>
<div>
  
  <v-card to="bebidas"
    id="bebidas"
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="Images\Sodas.png"
    ></v-img>

    <v-card-title>Bebidas</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >        
      </v-row>

      

      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>  
    
      
    
  </v-card>

  <v-card
    id="entradas"
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
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

  <v-card
    to="PizzasSalgadas"
    id="entradas"
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="Images\Pizzas salgadas.png"
    ></v-img>

    <v-card-title>Pizzas</v-card-title>

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

<style scoped>

#bebidas{
  margin-left: 2500px;
  background-color: white;
}

</style>
<script>
import axios from 'axios'
  export default {
    data: () => ({
      produto: [],
      loading: false,
      selection: 1,
      pedidoOut:{
        conta: "0"
      }
    }),
    methods: {
      pedido: function(){
        axios
            .post('https://cardapiotcc-backend.herokuapp.com/cadastrarPedido/' + this.$route.params.mesa, this.pedidoOut)
        
      }
    },
        mounted: function(){
            this.pedido()
        }

    
  }
</script>