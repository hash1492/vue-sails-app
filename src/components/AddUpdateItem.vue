<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <input type="text" v-model="item.name" name="" value="">
    <button v-if="editMode" type="button" name="button" @click="updateItem">Update</button>
    <button v-else type="button" name="button" @click="addItem">Add</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddUpdateItem',
  data () {
    return {
      pageTitle: 'Add Item',
      item: {},
      editMode: false
    }
  },
  created: function () {
    if (this.$route.params.id) {
      this.editMode = true
      this.pageTitle = 'Update Item'
      var self = this
      axios.get('http://localhost:1337/getItemById/' + this.$route.params.id)
      .then(function (response) {
        console.log(response)
        self.item = response.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  },
  methods: {
    addItem: function () {
      console.log('addItem called')
      if (!this.item.name) {
        return 0
      }
      var self = this
      axios.post('http://localhost:1337/addItem', self.item)
      .then(function (response) {
        console.log(response)
        self.$router.push({name: 'ItemsList'})
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    updateItem: function () {
      console.log('updateItem called')
      var self = this
      console.log(self.item)
      axios.post('http://localhost:1337/updateItem/', self.item)
      .then(function (response) {
        console.log(response)
        self.$router.push({name: 'ItemsList'})
      })
      .catch(function (err) {
        console.log(err)
      })
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

input {
  height: 30px;
  padding: 10px;
  font-size: 20px;
}
</style>
