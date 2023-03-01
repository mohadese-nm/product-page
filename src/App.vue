<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <p id="logo">دیجی کالا</p>
        </div>
        <div class="col-12 cards">
            <cards-page></cards-page>
        </div>
        <div class="col-12 footer">
        <p>فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین</p>
        <p id="about">درباره ما</p>
        </div>
    </div>
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
  background-color: #f5f7fa!important;
  font-family: Vazir, sans-serif;
    #logo {
        color: red;
        font-size: 24pt;
        margin: 24px 0;
        font-weight: bold;
        text-align: center;
    }
    .footer {
        width: 100%;
        max-width: 800px;
        background-color: #ffffff;
        border-radius: 12px 12px 0 0;
        margin-top: 1rem;
        margin-right: auto;
        margin-left: auto;
        padding: 2rem 0;
        text-align: center;
        #about{
            opacity: .7;
        }
    }
}
</style>
