<template>
  <div class="tools">
    <div class="tools-button" @click="refreshCommits">
      <div class="refresh-icon"></div>
    </div>
    <div class="tools-button" @click="revertCommits">
      <div class="revert-icon"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  refreshCommits: () => void
  revertCommits: () => void
}>()
</script>

<style scoped>
.tools {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  height: 36px;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0 4px;
}

.tools-button {
  width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
}

.tools-button:hover {
  background: #4c5052;
}

.refresh-icon {
  width: 20px;
  height: 20px;
  background: url('@/assets/refresh.svg') center/cover no-repeat;
}

.revert-icon {
  width: 22px;
  height: 22px;
  background: url('@/assets/revert.svg') center/cover no-repeat;
}
</style>
