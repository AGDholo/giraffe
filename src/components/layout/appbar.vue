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
