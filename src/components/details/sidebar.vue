<template>
  <aside>
    <section>
      <h3 class="pb-4 text-2xl font-medium">Popular Posts</h3>
      <hr class="border-gray-200" />

      <div>
        <div v-for="i in 5" :key="i" class="grid gap-4 py-2 md:grid-cols-[5fr_7fr] lg:grid-cols-[5fr_7fr]">
          <div class="h-full">
            <img
              class="h-full min-h-28 w-full object-cover"
              src="https://cdn.pixabay.com/photo/2021/01/22/16/55/camera-5940588_1280.jpg"
              alt=""
            />
          </div>
