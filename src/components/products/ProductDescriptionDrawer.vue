<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    @click="$emit('close-product-drawer')"
  />
  <div class="drawer" :class="{ show: active }">
    <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>
    <div v-if="product" class="product details">
      <h2 class="text-center">{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <h3 class="text-center">Price: ${{ product.price.toFixed(0) }} / lb</h3>

      <div class="cart-total" v-if="product_total">
        <h2 class="text-center">Quantity (lb): {{ product_total }}</h2>
      </div>

      <div class="button-container text-center">
        <button class="remove" @click="removeFromCart()">Remove</button>
        <button class="add" @click="addToCart()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'active'],
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product);
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.product);
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
};
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}

.drawer {
  width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;
  font-weight: bold;
  text-align: center;

  &.show {
    left: 0;
  }
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;

  border: 3px solid gray;
  color: gray;
  width: 40px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
}

.button-container {
  button {
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 50px 5px;
    cursor: pointer;
    font-weight: bold;
    background-color: blue;
    color: white;
    font-size: 20px;
  }
}
@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>
