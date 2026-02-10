<template>
    <ToDoItem v-for="(task) in tasks" :key="task.id" :task="task" class="to-do-list__container" @toggle="changeItemState"
        @edit="editItem" @delete="deleteItem">
        {{ task }}
    </ToDoItem>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/useTasksStore';
import ToDoItem from './ToDoItem.vue';

const store = useTasksStore()
const { tasks } = storeToRefs(store)
const { deleteItem, changeItemState, editItem } = store


</script>

<style lang="scss" scoped></style>