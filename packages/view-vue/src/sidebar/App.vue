<script setup lang="ts">
import CommitList from '@/components/sidebar/CommitList/CommitList.vue'
import CommitMessage from '@/components/sidebar/CommitMessage/CommitMessage.vue'
import SidebarFooter from '@/components/sidebar/SidebarFooter/SidebarFooter.vue'
import SidebarHeader from '@/components/sidebar/SidebarHeader/SidebarHeader.vue'
import Tools from '@/components/sidebar/Tools/Tools.vue'

const onHideSidebar = () => {
  //window.electron.ipcRenderer.send('hide-sidebar-window')
}

const refreshCommits = () => {
  //window.electron.ipcRenderer.send('refresh-commits')
}

const revertCommits = () => {
  //window.electron.ipcRenderer.send('revert-commits')
}
</script>

<template>
  <div class="sidebar-container">
    <SidebarHeader :onHideSidebar="onHideSidebar" />
    <Tools :refreshCommits="refreshCommits" :revertCommits="revertCommits" />
    <CommitList />
    <CommitMessage />
    <SidebarFooter />
  </div>
</template>

<style scoped>
.sidebar-container {
  overflow: auto;
  min-height: 100vh;
  width: 100%;
  background: var(--card-bg);
}
</style>
