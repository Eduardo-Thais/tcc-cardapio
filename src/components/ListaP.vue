<template>
    <v-container v-show="show">
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
                    <v-btn color="error" @click="deleta">Deletar</v-btn>
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

    data: () => {
        return {
            show: true
        }
        
      },
    methods: {
       deleta: function(){
            Swal.fire({
            title: 'Voce quer mesmo finalizar a conta?',
            text:'apos finalizar não tera como voltar.',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
            }).then((result) => {
            if (result.isConfirmed) {
                axios
                .post('https://cardapiotcc-backend.herokuapp.com/deletaProduto/' + this.produtos.id)
                Swal.fire({
                    title: 'Finalizado!',
                    text: 'O pedido foi finalizado com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        this.show = false
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('O pedido não foi excluido', '', 'info')
            }
            })
        },

       }
      
    }

</script>

<style>

</style>