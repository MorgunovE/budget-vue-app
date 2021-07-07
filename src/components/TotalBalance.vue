<template>
<!-- 14-1 -->
  <div class="total-value">Balance: {{ total }}</div>
</template>

<script>
export default {
  // 14-2
  name: "TotalBalance",
  // 14-3
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>