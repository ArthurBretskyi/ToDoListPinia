<template>
    <ToDoItem v-for="(task) in tasks" :key="task.id" :task="task" :is-editing="task.id === editingTaskId"
        :editing-title="editingTitle" :editing-priority="editingPriority" @toggle="emit('toggle', $event)"
        @delete="emit('delete', $event)" @edit="emit('edit', $event)" @update:title="$emit('update:title', $event)"
        @update:priority="$emit('update:priority', $event)" @save="$emit('save')" @cancel="$emit('cancel')"
        class="to-do-list__container">
        {{ task }}
    </ToDoItem>
</template>

<script setup>
import ToDoItem from './ToDoItem.vue';

defineProps({
    tasks: Array,
    editingTaskId: [Number, null],
    editingTitle: String,
    editingPriority: String
})

const emit = defineEmits(['toggle', 'delete', 'edit', 'update:title',
    'update:priority',
    'save',
    'cancel'])
</script>

<style lang="scss" scoped></style>