<template>
  
    
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                          </v-toolbar>
                            <v-card-text>
                              <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                          >
                            <v-text-field
                              v-model="name"
                              :rules="nomeRegras"
                              label="Name"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="senha"
                              :rules="senhaRegras"
                              label="Senha"
                              required
                            ></v-text-field>
                          </v-form>

                        </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="validate" >Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   
  
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nomeRegras: [
        v => !!v || 'Informe um nome para login',
      ],
      senha: '',
      senhaRegras: [
        v => !!v || 'Informe uma senha para login',
        v => (v && v.length >= 5) || 'A senha tem que ter no minimo 5 caracteres',
      ]
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate() == true){
          this.$router.push('/administrador')
        }
      }
    },
  }
</script>

<style>

</style>