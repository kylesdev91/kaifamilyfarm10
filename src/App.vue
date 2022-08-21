<template>
  <div id="nav">
    <div style="display: flex; margin-left: 5px; margin-top: -5px">
      <!-- <img src="leaf.jpg" style="height: 40px; width: 40px" /> -->
      <router-link to="/"
        ><img src="leaf.jpg" style="height: 40px; width: 40px"
      /></router-link>
      <router-link to="/"
        ><h3
          style="
            color: black;
            margin-top: 12px;
            margin-bottom: 1px;
            margin-left: -15px;
          "
        >
          Kai Family Farm
          <h6
            style="
              font-size: 11px;
              margin-top: 7px;
              margin-bottom: -15px;
              margin-left: 2px;
              font-family: cursive;
            "
          >
            Killer Ass Indo
          </h6>
        </h3></router-link
      >
    </div>

    <router-link to="/cart"
      ><img
        style="margin-top: -5px; margin-bottom: -15px"
        src="shoppingcart.jpeg"
    /></router-link>

    <!-- <router-link :class="{ active: $route.name === 'Home' }" to="/"
      >Home</router-link
    > -->
    <!-- <i class="glyphicon glyphicon-cloud"></i> -->
    <!-- <router-link :class="{ active: $route.name === 'Cart' }" to="/cart"
      >Cart</router-link
    > -->
    <!-- <router-link to="/cart">Cart</router-link> -->
    <!-- <div>
      <img src="shoppingcart.jpeg" />
    </div> -->
  </div>
  <router-view style="margin-top: 60px" />
</template>

<script>
import Spinner from './components/products/Spinner.vue';
export default {
  components: { Spinner },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage');
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; */
}

body {
  background-color: rgb(245, 245, 245);
}

#nav {
  /* padding: 5px; */
  display: flex;
  overflow: hidden;
  position: fixed;
  /* width: 100%; */
  /* height: 30px; */
  background-color: white;
  line-height: 10px;
  /* position: relative; */
  /* margin-bottom: 100; */
  top: 0;
  justify-content: space-between;
  width: 100%;

  a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 10px 10px;
    font-size: 1.25rem;

    &.active {
      color: #2c3e50;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
