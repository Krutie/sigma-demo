<template>
  <div>
      <label>Email</label>
      <input name="email" type="email" v-model="email"/>
      <button @click="login">Log in</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    login() {
      try {
        console.log('1 - Login form submit, dispatches login store action')
        this.$axios.$post('/api/login', {
          email: this.email,
        }).then(response => {
          console.log('axios response', response)   
        })
      } catch (e) {
          console.log('1 - error while login', e)
      }
    }
  }
}
</script>

