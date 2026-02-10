import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([])

  const activeTasks = computed(() => tasks.value.filter((task) => !task.isDone))
  const doneTasks = computed(() => tasks.value.filter((task) => task.isDone))

  function addItem(title, priority) {
    tasks.value = [
      ...tasks.value,
      {
        title,
        priority,
        id: new Date().getTime(),
        isDone: false,
      },
    ]
    return tasks.value
  }

  function changeItemState(itemId) {
    tasks.value = tasks.value.map((item) => {
      if (item.id !== itemId) return item
      return {
        ...item,
        isDone: !item.isDone,
      }
    })
    return tasks.value
  }

  function deleteItem(itemId) {
    tasks.value = tasks.value.filter((item) => item.id !== itemId)
    return tasks.value
  }

  function editItem(itemId, title, priority) {
    tasks.value = tasks.value.map((item) => {
      if (item.id !== itemId) return item
      return {
        ...item,
        title,
        priority,
      }
    })
    return tasks.value
  }
  return {
    tasks,
    addItem,
    changeItemState,
    deleteItem,
    editItem,
    activeTasks,
    doneTasks,
  }
})
