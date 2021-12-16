<template id="telaIn">
<div >
  <v-app id="inspire">
    <v-navigation-drawer absolute bottom temporary v-model="drawer" app v-if="naoepaginadelogin">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Itens
          </v-list-item-title>
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"          
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app v-if="naoepaginadelogin">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Restaurante</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu right >
        
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/login">
            <v-list-item-title>{{ login.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        
         </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  
</div>
</template>
<style scoped>
#telaIn{
  background-color: #B22222;
}
</style>
<script>
  export default {
    data: () => ({ drawer: null,
      items: [
          { title: 'Início', to: '/'},
          { title: 'Bebidas', to: 'Bebidas'},
          //{ title: 'Entradas', to:'/entradas' },
          { title: 'Pizzas', to:'Pizzas' },          
        ],
        login:{ title:'Administrador', to:'/login'},
        model: 1,
     }),
     computed: {
       naoepaginadelogin(){
         return this.$route.name !== "Login";
       }
     }
  }
</script>