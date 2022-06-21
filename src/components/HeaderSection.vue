<template>
  <app-header></app-header>
  <nav>
    <ul>
      <li><router-link to="/add" exact>Add a Deck</router-link></li>
      <li><router-link to="/decks" exact>Your Decks</router-link></li>
      <li><router-link to="/addCard" exact>Add a Card</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin-right: 40px;
  }
  li{
    display: inline-block;
    padding: 10px 10px;
  }
  li:hover{
    background: #eee;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 15px 15px;
    border-radius: 10px;
  }
  a:hover{
    color: green;
  }
  nav{
    background: #444;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: #eee;
    color: #444;
  }
</style>
