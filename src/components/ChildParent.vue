<template>
    <div class="">{{counter}}</div>
    <div class="">{{word}}</div>
     <q-btn @click="decrement" outline label="Decrement" />
</template>

<script setup lang="ts">

const props = defineProps({
    counter: {
        type: Number,
    },
    word: {
        type: String,
       
    },
    updateNumber: {
        type: Number,
    }
});

const emit = defineEmits(['update:counter']);

const decrement = () => {
    console.log("Decrement Working");
    console.log("props:Update Number: " + props.updateNumber);
    console.log("props:Counter : " + props.counter);
    if(!props.word || !props.counter || !props.updateNumber) return;
    // if(!props.counter) return;
    emit('update:counter', (props.counter - 1));
   
    
};

</script>