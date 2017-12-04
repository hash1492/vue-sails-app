<template>
  <div class="hello">
    Login
    <input type="text" name="" v-model="user.email" value="" placeholder="Email">
    <input type="password" name="" v-model="user.password" value="" placeholder="Password">
    <button type="button" name="button" v-on:keyup.enter="login" v-on:click="login()">Login</button>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      console.log('login clicked!')
      var self = this
      if (!this.user.email || !this.user.password) {
        alert('email or password missing')
        return 0
      }
      console.log(this.user.email)
      axios.post('http://localhost:1337/login', this.user)
      .then(function (response) {
        console.log(response)
        self.$router.push({name: 'ItemsList'})
      })
      .catch(function (err) {
        alert('user doesnt exists')
        console.log(err)
      })
    }
  }
}
</script>
