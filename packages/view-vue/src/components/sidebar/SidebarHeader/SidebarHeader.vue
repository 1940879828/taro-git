<template>
  <div class="sidebar-header">
    <div class="tabs">
      <div v-for="(item,index) in ['提交','搁置']" :class="`tab ${currentTab === index ? 'active' : ''}`" @click="currentTab = index" :key="index">
        {{item}}
      </div>
    </div>
    <div class="settings">
        
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentTab = ref(0)
</script>

<style scoped>
.sidebar-header {
  border: 1px solid #333;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  background: #3B4754;
}

.tabs {
  display: flex;
}

.tab {
  padding: 4px 8px;
  cursor: pointer;
}

.tab.active {
  border-bottom: 2px solid #4a88c7;
  font-weight: bold;
}
</style>
