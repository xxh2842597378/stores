<template>
  <div>
    <el-button type="primary" plain @click="addss()">添加</el-button>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>sex</th>
        <th>come</th>
        <th>#</th>
      </tr>
      <tr v-for="(v, i) in list" :key="i">
        <td>{{ v.id }}</td>
        <td>{{ v.name }}</td>
        <td>{{ v.sex }}</td>
        <td>{{ v.come }}</td>
        <td>
          <el-button type="danger" @click.prevent="deletevues(v.id)" plain>删除</el-button>
        </td>
        <td>
          <el-button type="success" @click.prevent="goedit(v.id)" plain>修改</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.axios.get('Users').then(res => {
        const { status, data } = res
        if (status === 200) {
          this.list = data
        }
      })
    },
    addss () {
      this.$router.push({ name: 'add' })
    },
    deletevues (id) {
      if (confirm('确定删除吗')) {
        this.axios.delete('Users/' + id)
          .then(res => {
            this.getdata()
          })
      }
    },
    goedit (id) {
      this.$router.push({ name: 'edit', params: { id: id } })
    }
  }
}
</script>

<style></style>
