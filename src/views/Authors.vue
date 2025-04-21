<template>
  <div class="grid gap-8 xl:grid-cols-[2fr_1fr]">
    <div>
      <div class="my-2">
        <h2 class="text-4xl font-bold">Our Authors</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="i in 8"
          :key="i"
          class="rounded transition-all duration-200 hover:bg-white hover:shadow-xl"
        >
