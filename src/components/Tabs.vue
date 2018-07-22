<template>
  <div v-if="hasTabs" :class="classNames">
    <div class="header" ref="tabHeader">
      <div
        v-for="(tab, index) in tabs"
        ref="tabButtons"
        role="tab"
        tabindex="0"
        :key="tab.id"
        :aria-controls="`tab-${index}`"
        :class="itemClass(index, 'title')"
        @click="activateTab(index)"
        @keyup.enter="activateTab(index)"
        @keyup.up="activateTab(activeTab - 1)"
        @keyup.left="activateTab(activeTab - 1)"
        @keyup.down="activateTab(activeTab + 1)"
        @keyup.right="activateTab(activeTab + 1)">
        <slot v-bind:tab="tab" name="title">
          {{ tab.title }}
        </slot>
      </div>
    </div>
    <div class="content">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :class="itemClass(index, 'tab')">
        <slot v-bind:tab="tab" name="content">
          {{ tab.content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    props: {
      vertical: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default () {
          return this.vertical ? 'left' : 'top'
        }
      },
      align: {
        type: String,
        default: 'left'
      },
      tabs: {
        type: Array,
        default () {
          return []
        }
      },
      active: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        activeTab: null
      }
    },
    watch: {
      'activeTab': 'setPosition'
    },
    mounted () {
      this.activeTab = this.validateIndex(this.active)
    },
    computed: {
      hasTabs () {
        return this.tabs.length
      },
      horizontal () {
        return !this.vertical
      },
      orientation () {
        return this.vertical ? 'vertical' : 'horizontal'
      },
      classNames () {
        var classes = ['tabs', this.orientation, this.position]

        if (this.horizontal)
          classes.push(this.align)

        return classes
      },
      currentTab () {
        return this.$refs.tabButtons[this.activeTab]
      },
      indexMax () {
        return this.tabs.length - 1
      }
    },
    methods: {
      itemClass (index, classes) {
        return index == this.activeTab ? `${classes} active` : `${classes}`
      },
      validateIndex (index) {
        if (index > this.indexMax) index = this.indexMax
        if (index < 0) index = 0

        return index
      },
      activateTab (index) {
        if (index !== this.activeTab) {
          var validIndex = this.validateIndex(index)

          if (validIndex !== this.activeTab) {
            this.activeTab = validIndex

            this.$emit('activated', this.tabs[index])
            this.currentTab.focus()
          }
        }
      },
      setPosition () {
        var currItem  = this.currentTab
        var offWidth  = this.$el.offsetWidth
        var scrollPos = offWidth - currItem.offsetLeft - currItem.offsetWidth

        if (currItem.nextSibling)
          scrollPos = scrollPos - currItem.nextSibling.offsetWidth

        if (scrollPos > -2)
          scrollPos = 0

        this.$refs.tabHeader.scrollLeft = Math.abs(scrollPos)
      }
    }
  }
</script>
