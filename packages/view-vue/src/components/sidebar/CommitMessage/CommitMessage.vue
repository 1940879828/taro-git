<template>
  <div class="commit-message">
    <textarea class="textarea"></textarea>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.commit-message {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.textarea {
  flex: 1;
  width: 100%;
  min-height: 100%;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 4px;
  font-size: 20px;
  color: var(--text-color);
  scrollbar-width: none;
  --ms-overflow-style: none;
}

.textarea::-webkit-scrollbar {
  display: none;
}
</style>
