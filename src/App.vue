<template>
<div>
    <p id="logo">دیجی کالا</p>
    <cards-page></cards-page>
</div>
</template>

<script>
import cardsPage from './views/cardsPage.vue'
export default {
    components:{cardsPage}
}
</script>

<style lang="scss">
@font-face {
  font-family: "Vazir";
  src: url("./assets/fonts/vazir.woff2");
}
body {
  direction: rtl;
  background-color: #f5f7fa;
  font-family: 'vazir', sans-serif;
  #logo {
    color: red;
    font-size: 24pt;
    margin: 24px 0;
    font-weight: bold;
    text-align: center;
  }
}
</style>
