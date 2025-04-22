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
          <img
            class="h-[300px] w-full rounded-2xl object-cover shadow"
            src="https://cdn.pixabay.com/photo/2021/01/30/20/04/sheltie-5965187_1280.jpg"
            alt=""
          />
          <div class="text-center">
            <span class="relative -top-[50px] -mb-[50px] inline-flex h-[86px] w-[86px] items-center justify-center rounded-full bg-accent text-white">
