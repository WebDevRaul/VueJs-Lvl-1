const vm = Vue.createApp({
  data() {
    return {
      f_name: 'John',
      l_name: 'Doe'
    }
  },
  methods: {
    name() {
      return `${f_name} ${l_name}`
    }
  }
}).mount('#app')

// setTimeout(() => { vm.f_name = 'Bob' }, 2000)