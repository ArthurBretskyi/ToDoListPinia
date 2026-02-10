<template>
    <div class="to-do-page">
        <ToDoForm @add="onAddTask" />
        <ToDoList :tasks="filteredTasks" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTasksStore } from '@/stores/useTasksStore'
import ToDoForm from '@/components/ToDoForm.vue'
import ToDoList from '@/components/ToDoList.vue';

const { addItem, tasks, activeTasks, doneTasks } = useTasksStore()

const currentFilter = ref('all')

const filteredTasks = computed(() => {
    if (currentFilter.value === 'active') return activeTasks.value
    else if (currentFilter.value === 'done') return doneTasks.value
    else return tasks.value
})


function onAddTask({ title, priority }) {
    addItem(title, priority)
}
</script>

<style lang="scss" scoped></style>