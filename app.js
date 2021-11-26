const vm = Vue.createApp({
  data() {
    return {
      f_name: 'John',
      m_name: '',
      l_name: 'Doe',
      url: 'https://google.com',
      raw_url: "<a href='https://google.com'  target='_blank'>Google</a>",
      age: 20
    }
  },
  methods: {
    name() {
      return `${this.f_name} ${this.l_name}`
    },
    updateMiddleName({ target: { value }}) {
      this.m_name = value
    },
    updateLName({ target: { value }}) {
      this.l_name = value
    },
    increment() {
      this.age++
    },
    add(value) {
      this.age = this.age + value
    }
  },
  computed: {
    fullName() {
      return `${this.f_name} ${this.m_name} ${this.l_name}`
    }
  }
}).mount('#app')

// setTimeout(() => { vm.f_name = 'Bob' }, 2000)