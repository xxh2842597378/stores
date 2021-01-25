<template>
  <div>
    <h1>修改数据</h1>
    <form>
      <el-input
        v-model='fromdata.name'
        style='width: 200px'
        placeholder='请输入name'
        clearable
      ></el-input>
      <el-input
        v-model='fromdata.sex'
        style='width: 200px;'
        placeholder='请输入sex'
      ></el-input>
      <el-input
        v-model='fromdata.come'
        style='width: 200px;'
        placeholder='请输入come'
      ></el-input>
      <el-button type='primary' @click='editvue()'>提交</el-button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fromdata: {
      }
    };
  },
  mounted() {
    this.getdatas()
  },
  methods: {
    getdatas() {
      this.axios.get('Users/' + this.$route.params.id).then(res => {
        console.log(res.data)
        this.fromdata = res.data;
      });
    },
    editvue() {
      this.axios.put('Users/' + this.$route.params.id, this.fromdata).then(res => {
        this.$router.push({ name: 'one' })
      })
    }
  }
};
</script>
<style lang='scss' scoped></style>
