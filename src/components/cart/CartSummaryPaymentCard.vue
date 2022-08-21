<template>
  <div class="cart-item-card">
    <div style="text-align: center">
      <h5>Cart Total: ${{ cart_total.toFixed(0) }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '$400',
    };
  },
  props: {
    getUser: Function,
  },
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  /* height: 60px; */
  font-size: 25px;
  margin-bottom: 40px;
  /* margin-top: 40px; */
  /* position: relative; */
  /* text-align: left; */
}
</style>
