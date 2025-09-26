import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const currentTab = ref(0)

  const setCurrentTab = (tab: number) => {
    currentTab.value = tab
  }

  return {
    currentTab,
    setCurrentTab
  }
})