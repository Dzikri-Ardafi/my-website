<template>
  <router-view/>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
 ::-webkit-scrollbar {
  width: 10px;
  background: rgba(170, 202, 208, 0.686);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgb(175, 180, 192);
  border: 1px rgb(231, 231, 244) solid;
}
::-webkit-scrollbar-thumb {
  background: rgba(127, 127, 218, 0.467) ;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(127, 127, 218, 0.592) ;
}
</style>