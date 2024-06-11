<template>
    <header>
      <h1>My App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>
  
  <style scoped>
  header {
    background-color: #42b983;
    color: white;
    padding: 10px;
  }
  nav a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
  </style>
  