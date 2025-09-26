<template>
  <div class="sidebar-header">
    <div class="tabs">
      <div v-for="(item,index) in ['提交','搁置']" class="tab" :class="{'active':sidebarStore.currentTab === index}" @click="sidebarStore.setCurrentTab(index)" :key="index">
        {{item}}
      </div>
    </div>
    <div class="settings">
      <div class="setting-button hidden">
        <div class="setting-icon"></div>
      </div>
      <div class="setting-button" @click="onHideSidebar">
        <div class="hide-icon"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebarStore'

defineProps<{
  onHideSidebar: () => void
}>()

const sidebarStore = useSidebarStore()


</script>

<style scoped>
.sidebar-header {
  border: 1px solid #333;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  background: #3B4754;
  height: 32px;
}

.tabs {
  display: flex;
}

.tab {
  padding: 4px 16px;
  cursor: pointer;
}

.tab:hover {
  background: #00000040;
}

.tab.active {
  border-bottom: 2px solid #4a88c7;
  font-weight: bold;
}

.settings {
  display: flex;
  align-items: center;
  gap: 8px;
}

.setting-button {
  width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
}

.setting-button:hover {
  background: #4c5052;
}

.setting-icon {
  width: 20px;
  height: 20px;
  background: url('@/assets/setting.svg') center/cover no-repeat;
}

.hide-icon {
  width: 27px;
  height: 27px;
  background: url('@/assets/hide.svg') center/cover no-repeat;
}
</style>
