<template>
  <aside @click="Details" id="Details" v-for="(Albums, index) in Albums" :key="index">
    <img src="..src/Albums.coverImage" alt="">
<h2>{{ Albums.title }}</h2>
<button>Play</button>

<div>
  <p>List of songs</p>
  <ul></ul>

</div>

  </aside>
</template>

<script>
const props = defineProps( {Album: Array})
console.log(props.Album);
</script>

<style>

</style>

