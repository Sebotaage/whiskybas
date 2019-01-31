<template>

  <div id="app">
    <router-view></router-view>
  <side-bar></side-bar>
  </div>
</template>














<style>
body {
 background-image: url("bg.png");
}
.add-whisky {
padding-top: 120px;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



input {
  background: #d8d8d8;
  border-radius: 3px;
  border: solid 1px;
  border-color: transparent;
  padding: 5px;
  margin-bottom: 5px;
}


.bigbtn {
  text-align: center;
  cursor: pointer;
  font-size:24px;

    position: relative;
    background-color: #fff;
    box-shadow: 0px 3px 60px #000;
    border-radius: 12px;
    padding: 20px;
    width: 180px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
   margin:20px;
}

.bigbtn:hover {
   background:#fff;
   box-shadow:0px 2px 10px 5px #black;
   color:#000;
   transform: scale(1.1);
}

  .createNew {
  margin:auto;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 3px 60px #000;
    max-width: 420px;
    transition: 0.2s;
  }

  .createNew:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }

textarea { resize: vertical; }

::-webkit-scrollbar {
display: none;
}
</style>
