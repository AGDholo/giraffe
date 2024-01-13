<template>
  <footer class="mt-16 bg-primary py-10 text-white">
    <div class="mx-auto w-full max-w-[1185px] px-4 sm:px-6">
      <div class="grid gap-8 md:grid-cols-4">
        <div>
          <h4 class="text-2xl font-bold">Giraffe</h4>
          <p class="mt-3 text-base leading-7">
            Create, prototype, collaborate and turn your ideas into incredible
            products with the definitive platform for digital design.
          </p>
        </div>

        <div>
          <h5 class="text-xl">HeroUI</h5>
          <ul class="mt-3 space-y-3">
            <li v-for="(item, i) in heroui" :key="i">
              <a :href="item.href" target="_black" class="text-base hover:text-accent">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-xl">Giraffe</h5>
          <ul class="mt-3 space-y-3">
            <li v-for="(item, i) in shock" :key="i">
              <a :href="item.href" target="_black" class="text-base hover:text-accent">
                {{ item.text }}
              </a>
            </li>
          </ul>
