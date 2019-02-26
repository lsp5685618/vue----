<template>
  <form @submit.prevent="submitmsg">
    姓名：<input type="text" v-model="msg.name">
    年龄：<input type="text" v-model="msg.age">
    <button type="submit" class="btn btn-default" >确认提交</button>
  </form>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Add",
      data () {
          return {msg:{
            name:'',
              age:''
            }}
      },
      methods:{
        submitmsg () {
            console.log('tijiao')
            const name = this.msg.name
            const age = this.msg.age
          let ds
            axios.post('http://127.0.0.1:3000/list',{name,age}).then(res=>{this.$router.back()})
          }
      }
    }
</script>

<style scoped>

</style>
