<template>
    <div>
      <v-row no-gutters>
        <v-col cols="12">
            
            <v-card
            color="green"
            dark
            >
            <v-card-title class="text-h5">
                Novo produto
            </v-card-title>
            <v-list-item>
            <v-row >
                
                <v-col md="4">
                    <p>Tipo</p>
                    <v-select
                    v-model="produto.tipo"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    required
                    ></v-select>
                
                    <p>Descrição</p>
                    <v-text-field
                    v-model="produto.descricao"
                    :rules="descricaoRegra"
                    label="CocaCola"
                    required
                    ></v-text-field>

                    <p>Preço</p>
                    <v-text-field
                    v-model="produto.valor"
                    :rules="precoRegra"
                    label="ex: 1,00"
                    required
                    ></v-text-field>

                </v-col>
                
            </v-row>
            </v-list-item>
                <v-card-actions>
                    
                        <v-btn color="blue" @click="save" >Salvar</v-btn>
                    
                    
                </v-card-actions>
          </v-card>
            
        </v-col>
      </v-row>
      <produtos :produtos="item" v-for="item in produtos" :key="item.id"/>
  </div>
</template>

<script>
const axios = require('axios').default;
const Swal = require('sweetalert2');

import produtos from '../components/ListaP.vue'
export default {
  components:{produtos},
    data: () => ({
      items: ['Refrigerante', 'Bebida Alcolica', 'Pizza', 'Entrada'],
      produto: {
          descricao: null,
          tipo: null,
          valor: null
      },
      produtos:[],
      descricaoRegra: [
        v => !!v || 'Descrição é requerido'
      ],
      precoRegra: [
        v => !!v || 'Preço é requerido',
        
      ]
    }),
    methods: {
        save: function() {
            if(this.produto.descricao != null && this.produto.tipo != null && this.produto.valor != null){
                axios
                .post('https://cardapiotcc-backend.herokuapp.com/cadastrarProduto', this.produto)
                Swal.fire({
                    title: 'Salvo!',
                    text: 'Seu produto foi salvo com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        this.load()
                    }
                })
            }
    },
        load: function() {
                    axios.get('https://cardapiotcc-backend.herokuapp.com/listarProduto')
                    .then(response => (this.produtos = response.data))
                    
                }
},
    mounted:function(){
                this.load()
            },
}
</script>

<style>

</style>