<template>
  <div>
    Items List
    <button type="button" name="button" @click="addItem">+ Add</button>
    <table>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
      <tr v-for="(item, index) in items">
        <td>{{index + 1}}</td>
        <td>{{item.name}}</td>
        <td><button type="button" name="button" @click="openItem(item)">View</button></td>
        <td><button type="button" name="button" @click="deleteItem(item)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ItemsList',
  data () {
    return {
      pageTitle: 'Items List',
      items: []
    }
  },
  created: function () {
    console.log('created called')
    var self = this
    axios.get('http://localhost:1337/getItems')
    .then(function (response) {
      console.log(response)
      self.items = response.data
    })
    .catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    addItem: function () {
      this.$router.push({name: 'AddItem'})
    },
    openItem: function (item) {
      this.$router.push({name: 'UpdateItem', params: { id: item.id }})
    },
    deleteItem: function (item) {
      var self = this
      var response = confirm('Are you sure you want to delete ' + item.name + '?')
      console.log(response)
      if (response) {
        axios.get('http://localhost:1337/deleteItem/' + item.id)
        .then(function (response) {
          console.log(response)
          axios.get('http://localhost:1337/getItems')
          .then(function (response) {
            console.log(response)
            self.items = response.data
          })
          .catch(function (err) {
            console.log(err)
          })
        })
        .catch(function (err) {
          console.log(err)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
