<template>
  <div id="app">
  <div>
      <label>UserName</label>
      <input type="text" v-model="user.username">
  </div>
  <br>
    <div>
      <label>Mail</label>
      <input type="text" v-model="user.email">
  </div>
  <br>
  <button @click="submit">Submit</button>
  <hr>
  <button @click="fetchData">Get Data</button>
  <hr>
  <input type="text" v-model="node">
  <ul>
    <li v-for="u in users" :key="u">{{u.username}} , {{u.email}}</li>
  </ul>

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        username: '',
        email: ''
      }, 
      users: [],
      resouce: {},
      node: 'data'
    }
  },
  methods: {
    submit() {
      // this.$http.post('data.json' , this.user)
      //   .then(response => {
      //       console.log(response)
      //   }, error => {
      //     console.log(error)
      //    });
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user)
         .then(response => {
            console.log(response)
        }, error => {
          console.log(error)
         });
      this.resource.save(this.user);
    },
  fetchData() {
    // this.$http.get('data.json')
    // .then(res => res.json())
    // .then(data => {
    //   const resultArray = [];
    //   for(let key in data) {
    //       resultArray.push(data[key]);
    //     }
    // this.users = resultArray
    // }
    // )}
    this.resource.getData({node: this.node})
    .then(res => res.json())
    .then(data => {
      const resultArray = [];
      for(let key in data) {
          resultArray.push(data[key]);
        }
    this.users = resultArray
    })
}
  },
created() {
  const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET'}
  }
  this.resource = this.$resource('{node}.json', {}, customActions)
}
}

</script>
