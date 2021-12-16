<template>
    <div v-show="show">
            
                <v-card class="mx-auto" width="500" >

                <v-card-title class="teal lighten-3">
                    <span class="text-h6 font-weight-light">{{ pedidos.mesa.nome }}
                    </span>
                    </v-card-title>

                <v-divider></v-divider>  

                <v-timeline 
                v-for="lista in lista" 
                    v-bind:key="lista.id"
                align-top dense>
                    <v-timeline-item 
                    v-if="lista.pedido.id == pedidos.id"
                    small>
                        <div >
                            <div class="font-weight-normal">
                                <strong>{{ lista.produto.descricao }}</strong>
                            </div>
                            <div>{{ lista.quantidade }}</div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
                <v-divider/>

                <v-card-text class="text-h6">R${{ pedidos.conta}} </v-card-text>

                <v-card-actions>
                    <v-btn color="error" @click="fechaConta">Fecha Conta</v-btn>
                </v-card-actions>
                </v-card>
            
    </div>
</template>

<script>
const Swal = require('sweetalert2')
const axios = require('axios').default;
export default {
    name: 'Mesas',

    props: {
        pedidos: {type: Object[Array], required: true},
        lista: []
    },
    data: () => {
        return {
            show: true
        }

    },
    mounted:function(){
        this.listaPedidos()
    },
    methods: {
        fechaConta: function(){
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
                .post('https://cardapiotcc-backend.herokuapp.com/deletaPP/' + this.pedidos.id)
                Swal.fire({
                    title: 'Finalizado!',
                    text: 'O pedido foi finalizado com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        axios
                        .post('https://cardapiotcc-backend.herokuapp.com/deletaPedido/' + this.pedidos.id)
                        this.show = false
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('O pedido não foi excluido', '', 'info')
            }
            })
        },
        listaPedidos: function(){
            axios
                .post('https://cardapiotcc-backend.herokuapp.com/listarPP')
                .then((response) => (this.lista = response.data))
        }
    }

}
</script>

<style>

</style>