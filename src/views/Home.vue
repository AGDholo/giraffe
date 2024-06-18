<template>
  <div>
    <router-link to="/detail" class="block overflow-hidden rounded">
      <div
        class="relative flex h-[500px] items-end bg-cover bg-center text-white"
        style="background-image: linear-gradient(to top, rgba(25,32,72,.7), rgba(25,32,72,.0)), url('https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg')"
      >
        <div class="w-full p-4 sm:p-6">
          <div class="flex flex-col">
            <div>
              <router-link class="inline-flex rounded bg-accent px-4 py-2 text-white" to="/category">Travel</router-link>
            </div>
            <div class="w-full py-3 md:w-10/12 lg:w-8/12 xl:w-7/12">
              <h2 class="text-5xl leading-tight">
                Great Travel Blogs From Around The World To Inspire You
              </h2>
            </div>
            <div class="flex items-center">
              <span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg">
                <i class="mdi mdi-feather text-3xl"></i>
              </span>
              <div class="pl-2 text-xl">Yan Lee · 22 July 2019</div>
            </div>
          </div>
        </div>
      </div>
    </router-link>

    <div class="grid gap-8 xl:grid-cols-[2fr_1fr]">
      <div>
        <section class="pt-16">
          <h2 class="pb-4 text-4xl font-bold">Recommended For You</h2>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <router-link
              v-for="i in 6"
              :key="i"
              to="/detail"
              class="group block rounded transition-all duration-200 hover:bg-white hover:shadow-xl"
            >
              <div
                class="h-[200px] rounded-2xl bg-cover bg-center p-4 shadow"
                style="background-image: linear-gradient(to top, rgba(25,32,72,.4), rgba(25,32,72,.0)), url('https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg')"
              >
                <router-link class="inline-flex rounded bg-accent px-4 py-2 text-white" to="/category">TIPS</router-link>
              </div>
              <div class="p-4">
                <div class="text-2xl font-bold text-primary">
                  How to write an awesome blog post in 5 steps
                </div>
                <div class="py-4 text-base">
                  Ultrices sagittis orci a scelerisque. Massa placerat
                  duis ultricies lacus sed turpis
                </div>
                <div class="flex items-center">
