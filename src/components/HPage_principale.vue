<template>
  <div>
    <h2>Page Principale</h2>
  </div>
  <main>

  <div class="Page" v-for="(Albums, index) in Albums" :key="index">
    <h3>{{ Albums.genre }}</h3>
    <h4>{{ Albums.title }}</h4>  
    <p>{{ Albums.description }} </p>
    <div class="tags">
      <span> {{ Albums.tags[0] }} </span>
      <span> {{ Albums.tags[1] }} </span>
      <span> {{ Albums.tags[2] }} </span>
      <span> {{ Albums.tags[3] }} </span>
      <span> {{ Albums.tags[4] }} </span>
    </div>
    <div class="button">
      <button> <a href="#">en</a> </button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
        <input type="number" name="quantity" min="i" max="i++" id="number">
      <span class="duration">
        <img src="../assets/img/icons8-chronomètre-48.png" alt="Chrono">
        <p> {{ Albums.duration }} </p>
      </span>
      <button><a href="#Details">Details</a></button>
    </div>
  </div>
   
  </main>  

 

</template>

<script setup>
import { ref } from "vue";
// import {  } from "../components/HomeDetails.vue";
const props = defineProps( {Albums: Array})
console.log(props.Albums);


</script>

<style scoped>

.Page{
  border: 1px ;
  border-radius: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 0 20px 25px -5px;
}

h3{
  background-color: rgb(247, 207, 247);

}

.tags{
  display: flex;
  justify-content: space-between;
  
}

.tags span {
  background-color: aqua;
}

svg{
  background-color: black;
  border-radius: 75%;
}

.button {
 display: flex;
 gap: 30px;
 margin-top: 20px;
 padding-bottom: 10px;

}

.Details{
  width: 50px;
  height: 30px;
}
.duration{
  display: flex;
  gap: 20px;
}

.button :first-child {
  margin-left: 10px;
  
  height: 30px;
}

#number{
  width: 20px;
  height: 20px;

}
</style>
