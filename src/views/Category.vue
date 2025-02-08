<template>
  <div class="grid gap-8 xl:grid-cols-[2fr_1fr]">
    <div>
      <div>
        <h2 class="text-4xl font-bold">ANIMAL</h2>
        <h4 class="text-xl">Some category description goes here</h4>
      </div>

      <hr class="my-4 border-gray-200" />

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="i in 18"
          :key="i"
