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
        name: "update",
      data () {
          return {
            msg:{
              name:'',
              age:'',
              id:''
            }
          }
      },
      methods:{
          submitmsg (){
            const {id} = this.$route.query
            const name = this.msg.name
            const age = this.msg.age
axios.patch(`http://127.0.0.1:3000/list/${id}`,{name,age}).then((res)=>{
  console.log(this.$router)
  console.log(res.data)
  console.log(this.$route.path)
  this.$router.back()
})
          }
      },
     async created() {
        const {id} = this.$route.query
        console.log(this.$route.query)
        const url = 'http://127.0.0.1:3000/list/'+id
       axios.get(url).then(res=>{
       this.msg.age = res.data.age
       this.msg.name = res.data.name
     }
     )
      }
    }
</script>

<style scoped>

</style>
