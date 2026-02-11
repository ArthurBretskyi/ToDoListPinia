<template>
    <div class="to-do-item__container">
        <div class="item">
            <div v-if="!isEditing">
                <span>{{ task.title }}</span>
            </div>

            <div v-else>
                <input :value="editingTitle" @input="emit('update:title', $event.target.value)" />

                <select :value="editingPriority" @change="emit('update:priority', $event.target.value)">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button @click="emit('save')">Save</button>
                <button @click="emit('cancel')">Cancel</button>
            </div>

            <div class="actions">
                <button @click="emit('edit', task.id)" class="add">Edit Task</button>
                <button @click="emit('delete', task.id)" class="add">Delete Task</button>
                <input type="checkbox" :checked="task.isDone" @change="emit('toggle', task.id)">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    task: {
        type: Object,
        required: true
    },
    isEditing: {
        type: Boolean,
        required: true
    },
    editingTitle: {
        type: String,
        required: true
    },
    editingPriority: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['toggle', 'delete', 'edit', 'update:title',
    'update:priority',
    'save',
    'cancel'])
</script>

<style lang="scss" scoped></style>