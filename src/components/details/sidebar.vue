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

          <div>
            <span class="inline-flex rounded bg-accent px-3 py-1 text-sm font-medium text-white">TRAVEL</span>
            <h3 class="py-3 text-xl font-bold text-primary">
              What do | need to know to start learning JavaScript?
            </h3>
            <div class="flex items-center">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                <i class="mdi mdi-feather text-sm"></i>
              </span>
              <div class="pl-2">Yan Lee · 03 Jan 2019</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-4">
      <h3 class="pb-4 text-2xl font-medium">Category</h3>
      <hr class="border-gray-200" />
      <div
        v-for="i in 5"
        :key="i"
        class="my-4 flex items-center justify-between rounded bg-accent p-4 text-white"
      >
        <h6 class="text-xl">Travel</h6>
        <div class="text-xl">47</div>
      </div>
    </section>

    <section class="pt-4">
      <h3 class="pb-4 text-2xl font-medium">Top Authors</h3>
      <hr class="border-gray-200" />
      <div class="pt-4">
        <div class="mb-6 flex items-center" v-for="i in 5" :key="i">
          <span class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
            <i class="mdi mdi-feather text-4xl"></i>
          </span>
          <div class="pl-2">
            <div class="text-xl">Yan Lee</div>
            <div class="text-lg">47 Articles</div>
          </div>
        </div>
      </div>
