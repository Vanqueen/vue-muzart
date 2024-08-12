<script setup>

</script>

<template>
  <header>
    
    <div class="wrapper"> 
      <nav>
        <h1> <a href="#"><img src="../public/Captureecran.png" alt="Logo Muzart"></a> </h1>
        <ul>
          <RouterLink to="/"> Home </RouterLink>
          <RouterLink to="/se_connecter"> Se Connecter </RouterLink>
        </ul>
      </nav>
      <span>Time:00h00min00s</span>
    </div>
  </header>
 <router-view class="test1"/>
</template>

<style scoped>

html {
  box-sizing: border-box;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 auto;
}

.router-link-active{
  color: aqua;
  font-weight: bold;
}

ul {
  display: flex;
  gap: 50px;
  
}



span{
  color: white;
}

header{
  position: relative;
  background-color: blue
  
}

nav {
  display: flex;
  max-width: 1000px;
}


</style>
