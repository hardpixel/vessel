<template>
  <div :class="classNames">
    <div class="image">
      <img :src="image" :alt="title">
    </div>
    <div class="title">
      <slot v-bind:title="title" name="title">
        {{ title }}
      </slot>
    </div>
    <div class="content">
      <slot v-bind:content="content" name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      title: {
        type: String,
        default: null
      },
      content: {
        type: String,
        default: null
      },
      image: {
        type: String,
        default: null
      },
      vertical: {
        type: Boolean,
        default: false
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
      horizontal () {
        return !this.vertical
      },
      orientation () {
        return this.vertical ? 'vertical' : 'horizontal'
      },
      classNames () {
        var classes = ['card', this.orientation]
        return classes
      }
    },
    methods: {

    }
  }
</script>
