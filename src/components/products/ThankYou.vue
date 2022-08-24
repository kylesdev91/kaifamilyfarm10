<template>
  <div class="backdrop" @click="closeThankYou">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <Spinner  v-if="showSpinner"/> -->
      <h1 class="thanks" v-if="showThankYou">{{ thankYouMessage }}</h1>
      <h1 class="nope" v-if="showErrorMessage">{{ errorMessage }}</h1>
    </div>
  </div>
</template>

<script>
// import Spinner from '@/components/products/Spinner.vue'
export default {
  props: ['responseFromCart'],
  components: {
    // Spinner
  },
  data() {
    return {
      // showSpinner: false,
      showThankYou: false,
      // responseFromCart: 200,
      thankYouMessage: 'Thank You!',
      showErrorMessage: false,
      errorMessage: 'Error!'
    }
  },
  methods: {
    closeThankYou() {
      this.$emit('close');
    },
  },
   async mounted() {
    console.log('The response status from CART.vue is ' + this.responseFromCart)
      if(this.responseFromCart !== 200){
        this.showErrorMessage = true;
        this.showThankYou = false;
      } else {
        //   await new Promise(resolve => {
        //     this.showSpinner = true;
        //     setTimeout(resolve, 2000)
        // })
        this.showThankYou = true;
        // this.showSpinner = false;
      }
  }
}
</script>

<style>
.modal {
  width: 200px;
  padding: 10px;
  margin: 200px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: black;
  border: none;
  padding: 0;
  font-size: 30px;
  text-align: center;
}

.modal .thanks {
  color: green;
  border: none;
  padding: 0;
  font-size: 30px;
  text-align: center;
}

.modal .nope {
  color: red;
  border: none;
  padding: 0;
  font-size: 30px;
  text-align: center;
}
.modal p {
  font-style: normal;
}


/* sale styles */
.modal.sale {
  background: green;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>
