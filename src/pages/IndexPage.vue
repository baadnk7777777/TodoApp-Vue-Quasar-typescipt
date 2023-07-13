<template lang="">
    <div>
        <div class="row rounded-borders ">
            <div class="col-3  q-px-md q-py-md bg-red-500" id="app">
                <div class="row" >
                    <div class="col text-h6 text-weight-bold">Menu</div>
                    <div class="col-auto"><q-icon name= "menu" size="sm" ></q-icon></div>
                    
                </div>
                <q-input standout v-model="text" label="Search" />
                <p class="text-weight-bold" >TASKS</p>
                <div class="">
                    <div class="row items-center">
                        <div class="col-auto"> <q-icon name= "keyboard_double_arrow_right" size="sm" ></q-icon> </div>
                        <div class="col">Upcoming</div>
                        <div class="col-auto bg-grey-4 q-px-sm q-py-sm rounded-borders">
                            <p class= "text-weight-bold">{{todosLenth}}</p>
                        </div>
                    </div>
                    <div class="row items-center">
                        <div class="col-auto"><q-icon name= "format_list_bulleted" size="sm" ></q-icon></div>
                        <div class="col ">Today</div>
                        <div class="col-auto bg-grey-4 q-px-sm q-py-sm rounded-borders">
                            <p class= "text-weight-bold">12</p>
                        </div>
                    </div>
                    <div class="row items-center">
                        <div class="col-auto"><q-icon name= "today" size="sm" ></q-icon></div>
                        <div class="col">Calendar</div>
                        <div class="col-auto bg-grey-4 q-px-sm q-py-sm rounded-borders">
                            <p class= "text-weight-bold">12</p>
                        </div>
                    </div>
                    <div class="row items-center">
                        <div class="col-auto"><q-icon name= "label" size="sm" ></q-icon></div>
                        <div class="col">Sticky wall</div>
                        <div class="col-auto bg-grey-4 q-px-sm q-py-sm rounded-borders">
                            <p class= "text-weight-bold">12</p>
                        </div>
                    </div>
                    
                </div>
                <p class="text-weight-bold">LISTS</p>
                <div class="">
                    <div class="row items-center">
                        <div class="col-auto bg-purple-11 q-px-sm q-py-sm rounded-borders">*</div>
                        <div class="col ">Personal</div>
                        <div class="col-auto bg-grey-4 q-px-sm q-py-sm rounded-borders">
                            <p class= "text-weight-bold">12</p>
                        </div>
                    </div>
                    <div class="row items-center">
                        <div class="col-auto bg-amber-8 q-px-sm q-py-sm rounded-borders">*</div>
                        <div class="col ">Work</div>
                        <div class="col-auto bg-grey-4 q-px-sm q-py-sm rounded-borders">
                            <p class= "text-weight-bold">12</p>
                        </div>
                    </div>
                    <div class=""><q-btn> + Add New List</q-btn></div>
                </div>
                <p>TAGS</p>
                <div class="row">
                        <div class="">TAG 1</div>
                        <div class="">TAG 2</div>
                        <div class="">TAG 3</div>
                    </div>
            </div>



            <div class="col q-ml-lg">
               <div class="row">
                <div class="col flex"> <h2 class="text-weight-bold">Todos</h2>
                   <div class="q-ml-lg items-center justify-center flex">
                    <span class="bg-grey-3 q-px-sm q-py-5 text-weight-bold text-h4 rounded-borders ">{{ todosLenth }}</span>
                   </div>
                </div>
           
               </div>
               <div class="">
                <div class="row">
                    <div class="col">
                        <p>{{todoText}}</p>
                        <q-input outlined v-model="todoText" type="text" label="Todo" value="Hello" />
                    </div>
                    <div class="flex q-mx-md">
                        <q-btn class ="" @click="handleCreateTodo">Create</q-btn>
                    </div>
                </div>
                
               </div>
              
               <div class="flex items-center" v-for="item in todos" :key="item.id">
                <q-checkbox v-model="val" />
                <span class = "text-h6">{{item.name}}</span>
               </div>
                
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { Todo } from "src/types/Todo";
import {createTodo, fetchTodos} from "src/services/TodoService";
import {onMounted, ref} from "vue";

const color = "#F5F5F5";

const todos = ref<Todo[]>();
const todosLenth = ref<number>();
const todoText = ref("");

const getTodoData = async () => {
    todos.value = await fetchTodos();
}


const handleCreateTodo = async () => {

    const todoName = todoText.value;
  if(todoName) {
    console.log(todoText);
    await createTodo(todoName);
  }
    await getTodoData();
    updatetodoLength();
    todoText.value = "";
};

const updatetodoLength = () => {
    if(todos.value) {
        todosLenth.value = todos.value.length;
    }
}


onMounted(async() => {
    await getTodoData();
  updatetodoLength();
});

</script>
<style lang="sass">
   
    
</style>