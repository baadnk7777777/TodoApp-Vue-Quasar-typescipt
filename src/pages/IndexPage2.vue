<template>
    <q-page class="row items-center justify-evenly">
      <!-- <div v-for="(data, index) in pokemonData" :key="index"></div> -->
      <!-- <div class="text-h6">Counter: {{ pokemonData?.results[0] }}</div>
      <div v-for="(data, index) in pokemonData" :key="index">
    <div class="text-h6">{{ data }}</div> -->
    
  <!-- </div> -->
  <!-- <div class="">Counter: {{counter}}</div>
  <q-btn @click="onClick">Add Counter</q-btn> -->
  
  <ChildParent :counter="counter" :word="word" :updateNumber= 1 @update:counter="updateCounter"></ChildParent>
  
    </q-page>
  
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from "vue";
  import ChildParent from "src/components/ChildParent.vue";
  import { PokemonRespoense } from "src/types/PokemonType";
  import {fetchPokemon} from "src/services/PorkemonService";
  
  const counter = ref<number>(0);
  const word = ref<string>('Hello tanakan');
  const updateNumber = 1;
  
  
  const updateCounter = (value: number) => {
    console.log(value);
    // counter.value += value;
  };
  
  const pokemonData = ref<PokemonRespoense>();
  
  const getPokemonData = async () => {
    pokemonData.value = await fetchPokemon();
  };
  
  
  onMounted(() => { // When refash reRender.
    getPokemonData();
  });
  
  
  
  // const counter = ref<number>(0); //ใช้ ref ในการประกาศตัวแปร เหมือน SetState
  // const msg = 'Hello Vue3 + Typescript.';
  
  const onClick = () => {
    console.log('clicked');
    counter.value++;
  };
  
  // const updateCounter = (value: number) => {
  //   console.log(value);
  //   counter.value += value;
  // };
  
  </script>
  