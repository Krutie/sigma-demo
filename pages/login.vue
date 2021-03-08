<template>
  <div>
      <label>Email</label>
      <input name="email" type="email" v-model="email"/>
      <button @click="login">Log in</button>
  </div>
</template>
<script>
const ORIGINS = {
  // vercel: process.client ? '' : 'https://sigma-demo-ten.vercel.app',
  vercel: 'https://sigma-demo-ten.vercel.app',
}
export default {
  data() {
    return {
      email: ''
    }
  },
  mounted() {
    const origin = ORIGINS[process.env.NITRO_PRESET]
    console.log('origin', origin)
    console.log('process.client', process.client)
    console.log('process.env.NITRO_PRESET', process.env.NITRO_PRESET)
  },
  methods: {
    login() {
      const origin = ORIGINS[process.env.NITRO_PRESET]
      const path = '/api/login'
      const url = origin + path
      try {
        console.log('1 - Login form submit, dispatches login store action')
        this.$axios.$post(url, {
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

