<template>
  <div class="container">
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
    name: 'productDescription',
    props: ['id'],
    data() {
      return {
          product: {}
        }
    },
    mounted() {
      fetch('http://localhost:3000/products/' + this.id)
        .then(res => res.json())
        .then(data => this.product = data)
        .catch(err => console.log(err.message))
    }
}
</script>
