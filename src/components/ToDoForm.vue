<template>
    <div class="to-do-form">
        <form class="form" @submit.prevent="onSubmit">
            <label for="title">Task:</label>
            <input id="title" type="text" v-model="title" />

            <label for="priority">Priority:</label>
            <select id="priority" v-model="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type="submit">Add</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const title = ref('')
const priority = ref('')

const emit = defineEmits(['add'])

function onSubmit() {
    if (!title.value.trim()) return

    emit('add', {
        title: title.value,
        priority: priority.value
    })

    title.value = ''
    priority.value = ''
}
</script>
  

<style lang="css" scoped></style>