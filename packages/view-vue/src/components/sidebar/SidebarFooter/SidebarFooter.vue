<template>
  <div class="side-footer">
    <div class="buttons">
      <div class="commit button">
        提交
      </div>
      <div class="button">
        提交并推送
      </div>
    </div>
    <div class="setting">

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  commit: () => void
  commitAndPush: () => void
}>()
</script>

<style scoped>
.side-footer {
  height: 40px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 8px;
  padding-left: 8px;
}

.button {
  height: 24px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  background: #4c5052;
  border: 1px solid #5c5e5e;
}

.commit.button {
  background: #365880;
  border: 1px solid #436786;
}
</style>
