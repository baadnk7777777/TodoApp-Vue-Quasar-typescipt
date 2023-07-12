<template lang="">
  <div>
    <h1>Todos</h1>
    <div class="row" style="height: 150px">
    <div class="col">
      <div class="">{{todos.length}}</div>
      <div v-for="(data, index) in todos" :key="index">
        {{data.name + data.timestamp}}
      </div>

    </div>
    <div class="col">
      <div class="col">
        <div class="col">
          <div class="q-gutter-md" style="max-width: 300px">
            <h3>Add a Todo</h3>
          </div>
         
        </div>
        <div class="col">
          <div class="q-pa-md">
            <div class="q-gutter-md" style="max-width: 300px">
              <q-input outlined 
      v-model="message" label="Todo"/>
      <p>Message is: {{message}}</p>
            </div>
            
          </div>

          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="Add Todo" @click="addTodo" />
          </div>

          
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const todos = ref([{ name: '' }, { timestamp: '' }])

const message = ref('');

console.log('Script setup')

const props = defineProps({
  foo: {
    type: String,
  },

  todo: {
    type: String,
  }
});
const emit = defineEmits(['change', 'delete']);
// variable 
const name = 'John Doe'

function addTodo(event) {
  if(event) {
    alert(event.target.tagName);
  }
}

function log() {
 todos.value.push({ name: message.value, timestamp: new Date() });
  console.log(message.value);
  console.log(todos.value.length);
}
</script>
<style lang="">
  
</style>