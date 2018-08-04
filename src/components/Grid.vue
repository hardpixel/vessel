<template>
  <div :class="classNames" v-wrap:div="cell">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      vertical: {
        type: Boolean,
        default: false
      },
      gap: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        cell: {
          class: 'cell'
        }
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
      spacing () {
        return this.gap ? 'gap' : ''
      },
      classNames () {
        var classes = ['grid', this.orientation, this.spacing]
        return classes
      }
    },
    methods: {

    }
  }
</script>
