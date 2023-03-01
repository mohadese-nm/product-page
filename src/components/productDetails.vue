<template>
  <div class="container">
    <div class="row">
      <div class="col-12 product-name">
        <p></p>
      </div>
      <div class="col-12 product-detail">
        <div class="row">
          <div class="col product-img"></div>
          <div class="col product-info">
            <div class="row">
              <div class="col-12 product-nav"></div>
              <div class="col-12 product-text"></div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'productDetails',
    props: ['id'],
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>