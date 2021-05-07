<template>
  <div>
    <p>DashaTran</p>
    <button @click="count++">我点击了{{count}}次</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
p{
  color: pink;
}
</style>