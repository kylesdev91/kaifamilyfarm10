<template>
  <div class="cart-item-card">
    <div class="header">
      <h6>{{ product.name }}</h6>
      <h6>Qty: {{ product.quantity }}</h6>
      <h6>${{ item_cost.toFixed(0) }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    description() {
      return this.product.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  /* width: 90%; */
  /* height: 100%; */
  margin: 5%;
  /* margin-top: 160px; */
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 20px;
  /* padding: 45px; */
  /* position: relative; */
  /* text-align: right; */
}
.header {
  display: flex;
  justify-content: space-around;
  text-align: right;
}
</style>
