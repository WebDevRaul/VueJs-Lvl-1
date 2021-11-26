const vm = Vue.createApp({
  data() {
    return {
      f_name: 'John',
      l_name: 'Doe',
      url: 'https://google.com',
      raw_url: "<a href='https://google.com'  target='_blank'>Google</a>"
    }
  },
  methods: {
    name() {
      return `${this.f_name} ${this.l_name}`
    }
  }
}).mount('#app')

// setTimeout(() => { vm.f_name = 'Bob' }, 2000)