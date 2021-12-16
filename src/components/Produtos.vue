<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
                <v-card
                
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                
                </template>                

                <v-card-title>
                    <span class="text-h6 font-weight-heavy">{{ produtos.descricao }}
                    </span> 
                    </v-card-title> 
                <v-divider></v-divider> 
                <v-card-text class="text-h6">
                        <strong>R${{ produtos.valor }}</strong>
                
                
                <v-card-actions>
                    <v-select
                    label="Selecione a mesa"
                    v-model="mesa"
                    :items="mesas"
                    item-text="nome"
                    item-value="id"
                    :rules="[v => !!v || 'Item is required']"
                    @input ="buscaPedido"
                    
                    required
                    ></v-select>
                    <v-text-field
                    label="Quantidade"
                    type="number"
                    v-model="produto.quantidade"
                    required
                    ></v-text-field>
                    <v-btn color="success" @click="pedir">Pedir</v-btn>
                </v-card-actions>

                
                </v-card-text>

                
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
const axios = require('axios').default;
const Swal = require('sweetalert2');
export default {
    name: 'Produtos',

    props: {
        produtos: {type: Object[Array], required: true}
    },

    data: () => ({
        mesas:[],
        pedido: [],
      produto: {
          quantidade: '',
          produto: {id: ''},
          pedido: {id: ''}
        },
        mesa: null,
        
      }),
    methods: {
        pedir: function(){
            this.produto.produto.id = this.produtos.id
            this.produto.pedido.id = this.pedido.id
            axios
                .post('https://cardapiotcc-backend.herokuapp.com/cadastrarPP', this.produto )
                Swal.fire({
                    title: 'Pedido feito!',
                    text: 'Seu pedido chegara em um momento', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        // vazio
                    }
                })
            
                
        },
        buscaPedido: function(){
            axios
                .get('https://cardapiotcc-backend.herokuapp.com/listarPedido/'+ this.mesa)
                .then((response) => (this.pedido = response.data))
                
                
        },
        listaMesa: function(){
            axios
                .post('https://cardapiotcc-backend.herokuapp.com/listarMesa')
                .then((response) => (this.mesas = response.data))
        }
        },
        mounted: function(){
            this.listaMesa()
        }
    }

</script>

<style>

</style>