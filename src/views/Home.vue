<template>
  <div class="home container">
    <h1>Tabs</h1>

    <tabs :tabs="tabs">
      <strong slot="title" slot-scope="{ tab }">
        <i class="mdi mdi-web"></i> {{ tab.title }}
      </strong>
      <p slot="content" slot-scope="{ tab }">
        <i class="mdi mdi-check"></i> {{ tab.content }}
      </p>
    </tabs>

    <tabs :tabs="tabs.slice(0, 2)" position="bottom" align="justify"></tabs>
    <tabs :tabs="tabs.slice(0, 2)" align="right"></tabs>
    <tabs :tabs="tabs.slice(0, 2)" align="center"></tabs>
    <tabs :tabs="tabs.slice(0, 2)" :vertical="true"></tabs>
    <tabs :tabs="tabs.slice(0, 2)" :vertical="true" position="right"></tabs>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        tabs: [
          {
            id: 1,
            title: 'First Tab',
            content: 'First tab text content'
          },
          {
            id: 2,
            title: 'Second Tab',
            content: 'Second tab text content'
          },
          {
            id: 3,
            title: 'Third Tab',
            content: 'Third tab text content'
          },
          {
            id: 4,
            title: 'Fourth Tab',
            content: 'Fourth tab text content'
          },
          {
            id: 5,
            title: 'Fifth Tab',
            content: 'Fifth tab text content'
          },
          {
            id: 6,
            title: 'Sixth Tab',
            content: 'Sixth tab text content'
          },
          {
            id: 7,
            title: 'Seventh Tab',
            content: 'Seventh tab text content'
          }
        ]
      }
    }
  }
</script>
