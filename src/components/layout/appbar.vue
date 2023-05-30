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
