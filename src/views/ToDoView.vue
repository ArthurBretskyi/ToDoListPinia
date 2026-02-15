<template>
    <div class="to-do-view">
        <h1 class="to-t-do-title">
            My To Do List
        </h1>
        <ToDoForm @add="onAddTask" />
        <div v-if="tasks.length > 0" class="filters">
            <button :class="{ active: currentFilter === 'all' }" @click="currentFilter = 'all'">
                All
            </button>

            <button :class="{ active: currentFilter === 'active' }" @click="currentFilter = 'active'">
                Active
            </button>

            <button :class="{ active: currentFilter === 'done' }" @click="currentFilter = 'done'">
                Done
            </button>
        </div>
        <ToDoList :tasks="filteredTasks" :editing-task-id="editingTaskId" :editing-title="editingTitle"
            :editing-priority="editingPriority" @toggle="changeItemState" @edit="startEdit" @delete="deleteItem"
            @update:title="val => editingTitle = val" @update:priority="val => editingPriority = val" @save="saveEdit"
            @cancel="cancelEdit" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/useTasksStore'
import ToDoForm from '@/components/ToDoForm.vue'
import ToDoList from '@/components/ToDoList.vue';

const store = useTasksStore()


const { tasks, activeTasks, doneTasks } = storeToRefs(store)
const { addItem, deleteItem, changeItemState, editItem } = store

const currentFilter = ref('all')

const editingTaskId = ref(null)
const editingTitle = ref('')
const editingPriority = ref('')


const filteredTasks = computed(() => {
    if (currentFilter.value === 'active') return activeTasks.value
    else if (currentFilter.value === 'done') return doneTasks.value
    else return tasks.value
})

function startEdit(taskId) {
    const task = tasks.value.find(t => t.id === taskId)
    if (!task) return

    editingTaskId.value = task.id
    editingTitle.value = task.title
    editingPriority.value = task.priority
}

function saveEdit() {
    if (!editingTaskId.value) return

    editItem(
        editingTaskId.value,
        editingTitle.value,
        editingPriority.value
    )

    cancelEdit()
}

function cancelEdit() {
    editingTaskId.value = null
    editingTitle.value = ''
    editingPriority.value = ''
}

function onAddTask({ title, priority }) {
    addItem(title, priority)
}
</script>

<style lang="css" ></style>