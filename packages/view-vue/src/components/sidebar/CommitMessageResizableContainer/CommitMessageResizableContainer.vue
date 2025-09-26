<template>
  <div class="resizable-container">
    <div ref="handleDiv" class="resize-handle" @mousedown="startDrag"></div>
    <div ref="resizableDiv" class="resizable-div" :style="{ height: height + 'px' }">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const resizableDiv = ref<HTMLElement | null>(null)
const handleDiv = ref<HTMLElement | null>(null)
const height = ref(218) // 初始高度
let startY = 0
let startHeight = 0

const maxHeight = () => {
  return window.innerHeight - 150 // 100vh - 36px
}

const startDrag = (e: MouseEvent) => {
  startY = e.clientY
  startHeight = height.value

  document.addEventListener('mousemove', handleDrag)
  document.addEventListener('mouseup', stopDrag)

  e.preventDefault()
}

const handleDrag = (e: MouseEvent) => {
  const deltaY = startY - e.clientY
  let newHeight = startHeight + deltaY // 向上拖动增加高度

  // 限制高度范围
  newHeight = Math.max(0, Math.min(newHeight, maxHeight()))

  height.value = newHeight
}

const stopDrag = () => {
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
}

onMounted(() => {
  if (handleDiv.value) {
    handleDiv.value.style.cursor = 'row-resize'
  }
})

onUnmounted(() => {
  stopDrag()
})
</script>

<style scoped>
.resizable-container {
  position: relative;
  width: 100%;
  overflow-y: hidden;
}

.resize-handle {
  height: 5px;
  width: 100%;
  background-color: transparent;
  cursor: row-resize;
  transition: background-color 0.2s;
}

.resize-handle:hover {
  background-color: transparent;
}

.resizable-div {
  width: 100%;
  background-color: #1e1e1e;
  border-top: none;
  box-sizing: border-box;
  overflow: auto;
  user-select: none;
  scrollbar-width: none;
  --ms-overflow-style: none;
}

.resizable-div::-webkit-scrollbar {
  display: none;
}
</style>
