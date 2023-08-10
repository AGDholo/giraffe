<template>
  <div>
    <transition name="drawer">
      <aside
        v-if="drawer"
        class="fixed inset-y-0 left-0 z-50 w-72 bg-primary px-4 py-6 text-white shadow-2xl md:hidden"
      >
        <nav class="space-y-1">
          <a
            v-for="(item, i) in btnItems"
            :key="`btn-${i}`"
            :href="item.href"
            :target="item.target"
            class="block rounded px-3 py-3 text-base"
            @click="drawer = false"
          >
            {{ item.text }}
          </a>
          <router-link
            v-for="(item, i) in barItems"
            :key="`bar-${i}`"
            :to="item.to"
            class="block rounded px-3 py-3 text-base"
            @click="drawer = false"
          >
            {{ item.title }}
          </router-link>
        </nav>
      </aside>
    </transition>

    <button
      v-if="drawer"
      class="fixed inset-0 z-40 bg-black/30 md:hidden"
      aria-label="Close navigation"
      type="button"
      @click="drawer = false"
    ></button>

    <header class="fixed inset-x-0 top-0 z-30 bg-white/95 shadow-sm backdrop-blur">
      <div class="mx-auto flex h-16 w-full max-w-[1185px] items-center justify-between px-4 sm:px-6">
        <div class="flex items-center">
          <button
            class="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-2xl md:hidden"
            aria-label="Open navigation"
            type="button"
            @click.stop="drawer = !drawer"
          >
            <i class="mdi mdi-menu"></i>
          </button>

          <router-link to="/" class="flex items-center text-2xl font-bold text-primary">
            <i class="mdi mdi-feather mr-1 text-3xl"></i>
            Hero
            <span class="text-accent">UI</span>
          </router-link>
        </div>
