<template>
    <div>
        <produtos :produtos="item" v-for="item in produtos" :key="item.id"/>
    </div>  
</template>

<script>
const axios = require('axios').default;
import produtos from '../components/Produtos.vue'
import{ mapState } from 'vuex'
export default {
  components: { produtos },
    mounted:function(){
            this.load()
        },
        methods: {
            load: function() {
                axios.get('https://cardapiotcc-backend.herokuapp.com/Produto/filter/Refrigerante')
                .then(response => (this.produtos = response.data))
                
            },

        },
        data: () => {
            return{
                produtos:[],
                
                
            }            
    },
        computed: {
            ...mapState({
                filtro: state => state.filtro
            })
        }

}

</script>

<style>

</style>