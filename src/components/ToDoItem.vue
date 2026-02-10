<template>
    <div class="to-do-item__container">
        <div class="item">
            <span>{{ task.title }}</span> -
            <span>{{ task.priority }}</span> -
            <span>{{ task.isDone }}</span>
            <div class="actions">
                <button @click="emit('toggle', task.id)" class="add">Change Status</button>
                <button @click="emit('delete', task.id)" class="add">Delete Task</button>
                <button @click="emit('edit', task.id)" class="add">Edit Task</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    task: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['toggle', 'delete', 'edit'])
</script>

<style lang="scss" scoped></style>