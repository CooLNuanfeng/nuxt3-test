<template>
  <div>
    <div>
      template1
    </div>
    <div v-for="item in lists" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { hash } from 'ohash'
import { onMounted } from 'vue'
const lists = ref([])
// const { public: { BASEURL } } = useRuntimeConfig()
const url = process.env.NODE_ENV === 'production' ? 'http://106.15.224.111:8092/rest/template/page' : process.server ? 'http://106.15.224.111:8092/rest/template/page' : '/rest/template/page'

const randomString = (e) => {
  e = e || 32;
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const a = t.length;
  let n = '';
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

const key = randomString()
console.log(key)
// const result = await useAsyncData(keyStr, ()=>$fetch(url))
// onMounted(async ()=>{
const result = await useFetch(url, {
  key: 'as'
})
const retData = result.data.value
console.log('result=>',result,retData)
lists.value = retData?.data?.list
// })


</script>

<style lang="scss" scoped>

</style>