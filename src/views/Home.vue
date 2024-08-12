<template>
  <header>
    <h1>
      <span>Page Principale</span>
      <span>Album</span>
      <span>Music</span>
    </h1>

    <div>
      <nav>
        <form @submit.prevent="search">
          <input
            type="search"
            required
            placeholder="..."
            v-model="inputValue"
            id="search"
          />
          <button type="submit">Search</button>
        </form>
      
      </nav>
    </div>
  </header>

 
  <div class="button">
    <button>Prev</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>Next</button>
  </div>  
    <HPage_principale :Albums="albums" />
   
    
  
</template>

<script setup>
import HPage_principale from "@/components/HPage_principale.vue";
import HMusic from "@/components/HMusic.vue";
import HAlbum from "@/components/HAlbum.vue";
import albums from "@/assets/data.js";
</script>

<style scoped>
.button {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}

#search{
  width: 500px;
  box-shadow:  -5px 5px 25px -5px;
}

</style>
