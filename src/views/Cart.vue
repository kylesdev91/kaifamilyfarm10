<template>
  <div style="margin-top: 35px; height: 2000px">
    <ThankYou
      v-if="showMsg"
      @close="showMsg = false"
      :responseFromCart=responseFromCart
    ></ThankYou>
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CartSummaryPaymentCard :getUser="getUserName" />
    <div>
      <div class="user" v-if="userInfo">
        <p>Welcome, {{ userInfo.userDetails }}</p>
      </div>
      <div class="text-center">
        <a
          v-if="userInfo"
          :href="`/.auth/logout?post_logout_redirect_uri=/.auth/login/aad`"
          ><button class="email">Logout</button></a
        >
        <a v-if="!userInfo" :href="`/.auth/login/aad`"
          ><button class="email">Login</button></a
        >
      </div>
      <div class="text-center">
        <button v-if="userInfo" class="email" @click="sendEmail">
          {{ btnLabel }}
        </button>
      </div>
      <div class="user" v-if="userInfo">
        <p>{{ this.orderStatus }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue';
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue';
// import items from '../data/items';
import axios from 'axios';
import ThankYou from '../components/products/ThankYou.vue';
export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
    ThankYou,
  },
  data() {
    return {
      name: '',
      btnLabel: 'Submit',
      orderStatus: '',
      showMsg: false,
      axiosStatus: '',
      responseFromCart: '',
      // items: items,
      userInfo: {
        type: Object,
        default() {},
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },

  props: ['product'],
  async created() {
    this.userInfo = await this.getUserInfo();
  },
  methods: {
    async sendEmail() {
      var date = new Date().toLocaleString();
      if (this.btnLabel === 'Submit') {
        // console.log(this.userInfo.userDetails);
        // var content = this.items.reduce(function (a, b) {
        var content = this.products.reduce(function (a, b) {
          return (
            a +
            '<tr><td>' +
            b.name +
            '</a></td><td style="text-align:center">' +
            b.quantity +
            '</td></td>'
          );
        }, '');
        var formData = {
          emailSubject: 'Online Order',
          emailBody: content,
          orderTotal: 'Total: ' + '$' + this.$store.getters.cartTotal,
          emailAddress: this.userInfo.userDetails,
        };
        try {
          await axios.post('/api/sendemail', formData).then((response) => {
            this.responseFromCart = response.status
          });
          this.btnLabel = 'Re-Order';
          this.showMsg = true;
          this.orderStatus = 'Order sent on ' + date;
        } catch {
          this.showMsg = true;
        }

      } else if (this.btnLabel === 'Re-Order') {
        this.orderStatus = '';
        this.btnLabel = 'Submit';
      }
    },
    async getUserInfo() {
      try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      } catch (error) {
        console.error('No profile could be found');
        return undefined;
      }
    },
    getUserName(name) {
      console.log(name);
      this.name = name;
    },
  },
};
</script>

<style lang="scss">
.login {
  background-color: green;
  /* font-weight: bold; */
  padding: 10px;
  /* width: 15%; */
  color: white;
  font-size: 20px;
  margin-left: 550px;
  width: 87px;
  /* width: 200px; */
  /* margin-left: 10px; */
  /* height: 100%; */

  /* position: relative; */
  /* margin: auto; */
}

.logout {
  background-color: green;
  /* font-weight: bold; */
  padding: 10px;
  /* width: 15%; */
  color: white;
  font-size: 20px;
  margin-left: 250px;
  width: 87px;

  /* width: 200px; */
  /* margin-left: 10px; */
  /* height: 100%; */

  /* position: relative; */
  /* margin: auto; */
}

.user {
  background-color: none;
  /* width: 15%; */
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  /* width: 200px; */
  /* margin-left: 10px; */
  /* height: 100%; */

  /* position: relative; */
  margin-bottom: 10px;
  /* margin-left: 250px; */
}

.email {
  background-color: green;
  /* font-weight: bold; */
  padding: 10px;
  /* width: 15%; */
  color: white;
  font-size: 18px;
  text-align: center;
  /* width: 200px; */
  /* margin-left: 10px; */
  /* height: 100%; */

  /* position: relative; */
  margin-bottom: 10px;
  /* margin-left: 250px; */
}
</style>
