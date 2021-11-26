const vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log("beforeCreate() func called!", this.message)
  },
  created() {
    console.log("created() func called!", this.message)
  },
  beforeMount() {
    console.log("beforeMount() func called!", this.$el)
  },
  mounted() {
    console.log("mounted() func called!", this.el)
  },
  beforeUpdate() {
    console.log("beforeUpdate() func called!")
  },
  updated() {
    console.log("updated() func called!")
  },
  beforeUnmount() {
    console.log("beforeUnmount() func called!")
  },
  unmounted() {
    console.log("unmounted() func called!")
  }
});

vm.mount('#app');

// setTimeout(() => vm.mount('#app'), 3000);