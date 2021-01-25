<template>
    <div>
<h1>添加组件</h1>
<form>
    <el-input v-model="formdata.name" style="width: 200px;" placeholder="请输入name" clearable></el-input>
    <el-input v-model="formdata.sex" style="width: 200px;" placeholder="请输入sex" ></el-input>
    <el-input v-model="formdata.come" style="width: 200px;" placeholder="请输入come"></el-input>
    <el-button type="primary" @click="addvvues()">提交</el-button>
</form>
    </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      formdata: {
        name: '',
        sex: '',
        come: ''
      }
    }
  },
  methods: {
    addvvues () {
      this.axios.post('Users', this.formdata).then(res => {
        this.$router.push({ name: 'one' })
      })
    }
  }
}
</script>

<style lang="" scoped>
</style>
