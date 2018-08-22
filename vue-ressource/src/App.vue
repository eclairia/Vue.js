<template>
  <div id="app">
    <div class="ui four column grid">
      <div class="column" v-for="user in users">
        <div class="ui card">
          <div class="content">
            {{ user.name }}
          </div>
          <div class="header">
            <input v-model="user.name">
          </div>
          <div>
            <button @click.prevent="save(user)">Modifier</button>
            <button @click="destroy(user)">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
      return {
          users: []
      }
  },
  mounted () {
      this.$user = this.$resource('users{/id}')

      this.$user.query().then((response) => {
        this.users = response.data
      }, (response) => {
          console.log('Erreur', response)
      })
  },
  methods: {
      save(user) {
        this.$user.update({
            id: user.id
        }, { name: user.name }).then((response) => {
        }, (response) => {
            console.log('Erreur', response)
        })
      },
      destroy(user) {
          this.$user.remove({ id: user.id }).then((response) => {
              this.users = this.users.filter(u => u !== user)
          }, (response) => {
              console.log('Erreur', response)
          })
      }
  }
}
</script>

<style>
</style>
