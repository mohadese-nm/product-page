<template>
<div class="container">
    <div class="row">
        <div class="col-12 digi-logo">
            <router-link :to="{name: 'products'}" id="logo">
                <p>دیجی کالا</p>
            </router-link>
        </div>
        <div class="col-12 cards">
            <router-view></router-view>
        </div>
        <div class="col-12 footer">
        <p>فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین</p>
        <router-link :to="{name: 'aboutUs'}" id="about-us">
            <p >درباره ما</p>
        </router-link>
        </div>
    </div>
</div>
</template>

<script>

export default {

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
  .digi-logo{
    margin-top: 1rem;
    #logo {
        color: red;
        font-size: 24pt;
        text-decoration: none;
        margin: 24px 0;
        font-weight: bold;
        text-align: center;
    }
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
        #about-us{
            text-decoration: none;
            color: #636464;
        }
    }
}
</style>
