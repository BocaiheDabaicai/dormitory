<script setup>
let {itemObject} = defineProps({
  headName:String,
  headItem1:String,
  headItem2:String,
  itemObject:Object
})

console.log(itemObject)
</script>

<template>
  <div class="table">

    <var-table :elevation="2">
      <thead>
      <tr>
        <th>{{ headName }}</th>
        <th>{{ headItem1 }}</th>
        <th>{{ headItem2 }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in itemObject" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.item1 }}</td>
        <td>{{ item.item2 }}</td>
      </tr>
      </tbody>
    </var-table>
  </div>
</template>

<style scoped>
.table{
  margin: 0 15px 20px;
}
</style>