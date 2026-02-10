<template>
    <div class="to-do-form">
        <form @submit.prevent="onSubmit">
            <label for="title">Enter Your Task:</label>
            <input id="title" type="text" v-model="title" />

            <label for="priority">Priority:</label>
            <input id="priority" type="text" v-model="priority" />

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
  

<style lang="scss" scoped></style>