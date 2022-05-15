<template>
  <div class="nav-container d-flex align-items-center">
    <font-awesome-icon
      @click="$router.push('/')"
      :icon="['fas', 'house']"
      class="icon px-2"
    />
    <font-awesome-icon
      @click="$router.go(-1)"
      :icon="['fas', 'arrow-left-long']"
      class="icon px-2"
    />
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-container {
  height: 40px;
  width: 100%;
  background: deepskyblue;
}
.icon {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
</style>
