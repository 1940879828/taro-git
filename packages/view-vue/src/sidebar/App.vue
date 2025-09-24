<script setup lang="ts">
import CommitList from '@/components/sidebar/CommitList/CommitList.vue'
import CommitMessage from '@/components/sidebar/CommitMessage/CommitMessage.vue'
import SidebarFooter from '@/components/sidebar/SidebarFooter/SidebarFooter.vue'
import SidebarHeader from '@/components/sidebar/SidebarHeader/SidebarHeader.vue'
import Tools from '@/components/sidebar/Tools/Tools.vue'
</script>

<template>
  <div class="sidebar-container">
    <SidebarHeader />
    <Tools />
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
