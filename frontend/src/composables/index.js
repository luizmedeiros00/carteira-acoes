import { reactive } from 'vue'

export const sidebarState = reactive({
  isOpen: window.innerWidth > 1024,
  isHovered: false,
  handleHover(value) {
    if (window.innerWidth < 1024) {
      return
    }
    sidebarState.isHovered = value
  },
  handleWindowResize() {
    if (window.innerWidth <= 1024) {
      sidebarState.isOpen = false
    } else {
      sidebarState.isOpen = true
    }
  },
})

