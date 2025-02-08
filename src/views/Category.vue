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
          to="/detail"
          class="group block rounded transition-all duration-200 hover:bg-white hover:shadow-xl"
        >
          <div
            class="h-[200px] rounded-2xl bg-cover bg-center p-4 shadow"
            style="background-image: linear-gradient(to top, rgba(25,32,72,.4), rgba(25,32,72,.0)), url('https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg')"
          >
