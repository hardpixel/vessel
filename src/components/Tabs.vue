<template>
  <div class="tabs">
    <div class="header" :style="headerStyle">
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
        activeTab: null,
        position: 0
      }
    },
    watch: {
      'activeTab': 'setPosition'
    },
    mounted () {
      this.activeTab = this.validateIndex(this.active)
    },
    computed: {
      currentTab () {
        return this.$refs.tabButtons[this.activeTab]
      },
      indexMax () {
        return this.tabs.length - 1
      },
      headerStyle () {
        return {
          left: `${this.position}px`
        }
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
        var validIndex = this.validateIndex(index)

        if (validIndex !== this.activeTab) {
          this.activeTab = validIndex

          this.$emit('activated', this.tabs[index])
          this.currentTab.focus()
        }
      },
      setPosition () {
        var currItem = this.currentTab
        var offWidth = this.$el.offsetWidth
        var position = offWidth - currItem.offsetLeft - currItem.offsetWidth

        if (currItem.nextSibling)
          position = position - currItem.nextSibling.offsetWidth

        if (position > -2)
          position = 0

        if (position !== this.position)
          this.position = position
      }
    }
  }
</script>
