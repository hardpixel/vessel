<template>
  <figure>
    <img :src="src" :alt="alt">
  </figure>
</template>

<script>
  export default {
    name: 'media',
    props: {
      src: {
        type: String,
        default: null
      },
      alt: {
        type: String,
        default: null
      }
    },
    data () {
      return {

      }
    },
    watch: {

    },
    mounted () {

    },
    computed: {

    },
    methods: {

    }
  }
</script>
