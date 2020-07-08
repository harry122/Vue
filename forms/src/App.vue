<template>
  <div id="app">
     <form>
      <input
         type="email" 
         name="email"
         :value="userData.email"
         @input="userData.email = $event.target.value"
         />
         {{userData.email}}

         <app-switch v-model="dataSwitch"></app-switch>
        Switched: {{dataSwitch}}
      <input
         type="text" 
         name="password"
         v-model.lazy="userData.password"
      /> 
      {{userData.password}}
    <input
         type="text" 
         name="age"
         v-model="userData.age"
      />   
      {{userData.age}}   
      <textarea
        rows="5"
        v-model="userData.message"
      ></textarea>
      <p style="white-space:pre">{{userData.message}}</p>
    <label>send mail</label> 
        <input 
        type="checkbox"
        v-model="sendMail"
        value="sendmail"
        >
     <label>send mail</label>
        <input type="checkbox"
        value="sendinfo"
        v-model="sendMail">
        <ul>
      <li v-for="item in sendMail" :key="item">{{item}}</li>
        </ul>

      <input 
        type="radio" 
        v-model="gender" 
        value="Male">
         <label>Male</label>
      <input 
        type="radio" 
        v-model="gender" 
        value="Female">
          <label>Female</label><br>
      {{gender}}

      <select v-model="selectedPriority">
          <option v-for="p in priorities" :key="p" 
              :selected="p == 'medium'">{{ p }}</option>
      </select>
      <button
        @click.prevent=""    
      >
        Submit
      </button>
  </form>      
  </div>

</template>

<script>
import Swtich from './Switch';

export default {
  el: '#app',
  data () {
    return {
      userData: {
      email: '',
      password: '',
      age: 27,
      message: "hello",
      },
        sendMail:[],
        gender: "Male",
        selectedPriority: 'Medium',
        priorities: ['high', 'medium', 'row'],
        dataSwitch: true,
        isSubmitted: false
    }
  },
  components: {
   appSwitch: Swtich 
  },
  methods: {
    submitted() {
      this.isSubmitted =true
    }
  }
}
</script>

<style>

</style>
