<template>
  <div>
    <div class="col-sm-6 col-md-4">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
          </h3>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
          </div>

          <div class="pull-right">
            <button class="btn btn-info" @click="sellStock" :disabled="quantity <= 0">SELL</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    }
  }
};
</script>
