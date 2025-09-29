<script setup lang="ts">
import CommitList from '@/components/sidebar/CommitList/CommitList.vue'
import CommitMessage from '@/components/sidebar/CommitMessage/CommitMessage.vue'
import CommitMessageResizableContainer from '@/components/sidebar/CommitMessageResizableContainer/CommitMessageResizableContainer.vue'
import SidebarFooter from '@/components/sidebar/SidebarFooter/SidebarFooter.vue'
import SidebarHeader from '@/components/sidebar/SidebarHeader/SidebarHeader.vue'
import Tools from '@/components/sidebar/Tools/Tools.vue'
import CommitTools from '@/components/sidebar/CommitTools/CommitTools.vue'

const onHideSidebar = () => {
  //window.electron.ipcRenderer.send('hide-sidebar-window')
}

const refreshCommits = () => {
  //window.electron.ipcRenderer.send('refresh-commits')
}

const revertCommits = () => {
  //window.electron.ipcRenderer.send('revert-commits')
}

const commit = () => {
  //window.electron.ipcRenderer.send('commit')
}

const commitAndPush = () => {
  //window.electron.ipcRenderer.send('commit-and-push')
}
</script>

<template>
  <div class="sidebar-container">
    <SidebarHeader :onHideSidebar="onHideSidebar" />
    <Tools :refreshCommits="refreshCommits" :revertCommits="revertCommits" />
    <CommitList class="commit-list" />
    <CommitTools />
    <CommitMessageResizableContainer>
      <CommitMessage />
    </CommitMessageResizableContainer>
    <SidebarFooter :commit="commit" :commitAndPush="commitAndPush" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  commit: () => void
  commitAndPush: () => void
}>()
</script>

<style scoped>
.sidebar-container {
  overflow: auto;
  min-height: 100vh;
  width: 100%;
  background: var(--card-bg);
  display: flex;
  flex-direction: column;
}

.commit-list {
  flex: 1;
}
</style>
