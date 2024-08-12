<template>
  <div>
    <form @submit.prevent="">
        <span class="pre">
            <pre>Email address</pre>
            <input type="email" name="" id="email" required placeholder="Enter email">
            <p>We'll never share your email with anyone else.</p>
        </span>
        
        <span class="password">
            <pre>Password</pre>
            <input type="password" name="Password" id="Password" required placeholder="Password">
        </span>

        <span class="checkbox">
            <input type="checkbox" name="" id="checkbox">
            <p>Stay logged in</p>
        </span>
        <input type="submit" value="submit" id="submit">
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>

div{
  box-shadow:  0 0px 10px -5px;
  border-radius: 25px;
  padding-left: 20px;
  padding-bottom: 10px;
}

.pre input{
  width: 500px;
}

.password input{
  width: 500px;
}

.checkbox{
display: flex
}

#submit{
  background-color: blue;
  color: white;
  border-radius: 10px;
  height: 30px;
}
</style>
