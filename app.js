const vm = Vue.createApp({
  data() {
    return {
      f_name: 'John',
      l_name: 'Doe'
    }
  }
}).mount('#app')

// setTimeout(() => { vm.f_name = 'Bob' }, 2000)